
from rest_framework.response import Response
# it will dispatch request to appropriate handler method
from rest_framework.views import APIView
from rest_framework import permissions
from django.contrib.auth.models import User
from user_profile.models import UserProfile
from .models import Feedbacks
from .serializers import UserSerializer, FeedbackSerializer
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect
from django.utils.decorators import method_decorator
from django.contrib import auth
import datetime
# Create your views here.

# @method_decorator(csrf_protect,name='dispatch')


class CheckAuthenticatedView(APIView):

    def get(self, request, format=None):
        user = self.request.user
        try:
            isAuthenticated = user.is_authenticated
            # print("AUTH = ",User.is_authenticated())
            if isAuthenticated:
                return Response({'isAuthenticated': 'success'})
            else:
                return Response({'isAuthenticated': 'error'})
        except:
            return Response({'error': 'Something went wrong while checking authentication status'})


# method decorator to accept only csrf validated requests
@method_decorator(csrf_protect, name='dispatch')
class SignUpView(APIView):
    # The AllowAny permission class will allow unrestricted access,
    permission_classes = (permissions.AllowAny,)
    # regardless of if the request was authenticated or unauthenticated

    def post(self, request, format=None):
        data = self.request.data

        username = data['username']
        password = data['password']
        re_password = data['re_password']

        try:
            if password == re_password:

                if User.objects.filter(username=username).exists():
                    return Response({'error': 'Username already exists!'})
                else:
                    if len(password) < 6:
                        return Response({'error': 'Password length must be atleast 6'})
                    else:
                        user = User.objects.create_user(
                            username=username, password=password)
                        # create_user() is a function in django User model that creates a new user
                        # user.save() we don;t need as it is already saving while creating
                        # to have this details in our profile we need to save it in profile collection
                        # getting instance of User
                        user = User.objects.get(id=user.id)
                        user_profile = UserProfile.objects.create(
                            user=user, first_name='', last_name='', phone='', city='')
                        # user_profile.save() no need as .objects.create is added to UserProfile will save it by default
                        return Response({'success': 'User created successfully..'})

            else:
                return Response({'error': 'Passwords do not match'})
        except:
            return Response({'error': 'Something went wrong while registering account'})


@method_decorator(csrf_protect, name='dispatch')
class LoginView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        print(self.request.user, "=>", self.request.data)
        username = data['username']
        password = data['password']

        user = auth.authenticate(username=username, password=password)
        try:
            if user is not None:
                auth.login(request, user)
                return Response({'success': 'User Authenticated'})
            else:
                return Response({'error': 'Error Authenticating'})
        except:
            return Response({'error', 'Something went wrong while loggin in'})

# we don't nees CSRF protec here as it will be csrf protected when we are logged in


class LogoutView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        username = data["username"]
        print("User received : ",username)
        try:
            auth.logout(request)
            return Response({'success': 'logged out'})
        except:
            return Response({'error': 'Something went wrong when logging out'})


# As react dyna,ically load form
# # we will create a view that we can access to get csrf token
# this function attaches CSRFToken to cookie for csrf validation
@method_decorator(ensure_csrf_cookie, name='dispatch')
class GetCSRFToken(APIView):
    # it will not enforce to have a csrf token in the form for session authentication
    permission_classes = (permissions.AllowAny,)
    # right now this is not csrf protected

    def get(self, request, format=None):
        return Response({'success': 'CSRF cookie set'})

# ACCOUNT DELETION


class DeleteAccountView(APIView):
    def post(self, request, format=None):
        user = self.request.user

        try:
            User.objects.filter(id=user.id).delete()
            # can store a deleted user by user = User.objects.. above method
            # .get => for getting single unique object from db
            # .filter for getting multiple data matchingg the query
            return Response({"success": "User deleted successfully"})
        except:
            return Response({"error": "Something went wrong while deleting"})

# TO SHOW ALL THE USERS


class GetUsersView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if self.request.user.is_superuser:
            users = User.objects.filter()
            #print(users[0].id) returns list of complex type
            users = UserSerializer(users, many=True)
            return Response(users.data)
        else:
            return Response({'error': 'Invlalid access'})
#TO GET PARTICULAR USERS BEING SEARCHED

class GetSearchedUsersView(APIView):
    permission_classes = (permissions.AllowAny,)

    def post(self, request, format=None):
        data = self.request.data
        searchItem = data["username"]
        print("DATA : ",data)
        try:
            users = User.objects.filter(username__contains=searchItem).order_by(username)
            if len(users) == 0:
                return Response({'error':'No User Exists..'})
                
            users = UserSerializer(users,many=True)
            print(users)
            return Response({"data":users.data})
        except:    
            return Response({'error':'Something went wrong..'})
# FEEDBACKS


class GetFeedbacksView(APIView):
    permission_classes = (permissions.AllowAny,)

    def get(self, request, format=None):
        if self.request.user.is_superuser:
            feedbacks = Feedbacks.objects.filter(
                timestamp=datetime.data.today())

            feedbacks = FeedbackSerializer(feedbacks, many=True)
            return Response(feedbacks.data)
        else:
            return Response({'error': 'Invlalid access'})


class StoreFeedbackView(APIView):

    def post(self, request, format=None):
        data = self.request.data

        feedback = data['feedback']
        sender = data['sender']
        timestamp = datetime.datetime.now()

        try:
            feed = Feedbacks.objects.create(
            feedback=feedback, timestamp=timestamp, sender=sender)
            return Response({'success': 'Feedback sent successfully..'})
        except:
            return Response({'error': 'Something went wrong while sending feedback'})
