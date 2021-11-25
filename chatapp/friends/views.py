from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from rest_framework import permissions
from django.contrib.auth.models import User
from .models  import Friend
from .serializers import FriendSerializer
# Create your views here.

class GetFriendView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self,request,format=None):
        try:
            user = self.request.user
        
            friends = Friend.objects.filter(user=user)  

            friends = FriendSerializer(friends,many=True)
            return Response({'friends':friends.data})
        except:
            return Response({"error":"Something went wrong"})    
         

class StoreFriendView(APIView):

    def post(self, request, format=None):
        data = self.request.data

        user = self.request.user
        friendid=0
        userid=0
        friend = data['friend_username']
        try:
            friendid = User.objects.get(user=friend).id
            userid = User.objects.get(user=user).id
        except:    
            return Response({'error':'Something went wrong..'})
        
        connectionid = friendid+''+userid
        
        # After friend request acceptance

        try:
            friend = Friend.objects.create(user=user,friendid=friendid,friend=friend,connectionid=connectionid)
            friend = Friend.objects.create(user=friend,friendid=userid,friend=user,connectionid=connectionid)
            return Response({'success': 'Request sent successfully..'})
        except:
            return Response({'error': 'Something went wrong while sending feedback'})

# Check connectionid
class CheckConnectionId(APIView):
    
    def post(self,request,format=None):
          data = self.request.data
          user = self.request.user
          friend = data['friend']

          try:
              conId = Friend.objects.filter(user=user,friend=friend)
              
              if len(conId) == 0:
                  conId = Friend.objects.filter(user=friend,friend=user)
                  if len(conId) == 0:
                    return Response({'error':'create new connection'})
                  else :
                     conId = FriendSerializer(conId)
                     return Response({'connectionData':conId.data})   
              else:
                    conId = FriendSerializer(conId)
                    return Response({'connectionData':conId.data})   
                
          except:
               return Response({"error":"Something went wrong while checking connectionID"})
