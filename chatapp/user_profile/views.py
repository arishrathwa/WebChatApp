from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from .models import UserProfile
from .serializers import UserProfileSerializer
# Create your views here.

class GetUserProfileView(APIView):

    def get(self,request,format=None):
        try:
            user = self.request.user
            username = user.username
            print(self.request.user)
            # user = User.objects.get(id=user.id)
            # print(user)
            user_profile = UserProfile.objects.get(user=user)
            print(user_profile)
            print("CHECK CALL : ",user_profile.first_name)
            user_profile = UserProfileSerializer(user_profile)
            print(user_profile.data)
            return Response({'profile':user_profile.data,'username':username})
        except:
            return Response({'error':'Something went wrong while fetchind profile data'})    

class UpdateUserProfileView(APIView):

    def put(self,request,format=None):
        print("arrrrrR")
        print(self.request.user)
        try:
            user = self.request.user
            username = user.username
            
            data = self.request.data
            firstName = data["first_name"]
            lastName = data["last_name"]
            phone = data["phone"]
            city = data["city"]
            print(data)
            # user = User.objects.get(id=user.id)
            # print("Profile : ",user)
            user_profile = UserProfile.objects.filter(user=user).update(first_name=firstName, last_name=lastName, phone=phone, city=city) 
            print(user_profile)
            
            
            user_profile = UserProfile.objects.get(user_id=user.id)
            user_profile = UserProfileSerializer(user_profile)
            print(user_profile.data)
            return Response({'profile':user_profile.data,'username':username})
        except:
            return Response({'error':'Something went wrong while updating profile..'})    
