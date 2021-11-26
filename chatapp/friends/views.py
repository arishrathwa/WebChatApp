from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from rest_framework import permissions
from django.contrib.auth.models import User
from .models  import Friend
from .serializers import FriendSerializer
from bnotify.models import Notifications
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
        connectionid = ""
        print("USER : ",user," => ",data)
        if data['connectionid'] != "":
              connectionid = data["connectionid"]  
        else :
            try:
                friendid = User.objects.get(username=friend).id
                userid = User.objects.get(username=user).id
            except Exception as e:
                print("error : ",e)    
                return Response({'error':'Something went wrong..'})
            
            connectionid = str(friendid)+''+str(userid)
        
        # After friend request acceptance
        print("CID : ",connectionid)
        try:
            Friend.objects.create(user=user,username=user,friendid=friendid,friend=friend,connectionid=connectionid)
            # friend = Friend.objects.create(user=friend,username=friend,friendid=userid,friend=user,connectionid=connectionid)
            res =  Notifications.objects.create(sender=user,receiver=friend,request="accept",info=str(connectionid))
        
            Notifications.objects.filter(sender=receiver,receiver=user,request='sent')[0].delete()
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
