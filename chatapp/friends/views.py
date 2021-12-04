from django.shortcuts import render
from rest_framework.exceptions import ErrorDetail
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from rest_framework import permissions
from django.contrib.auth.models import User
from .models  import Friend
from .serializers import FriendSerializer
from bnotify.models import Notifications
import datetime
import json
# Create your views here.

class GetFriendView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self,request,format=None):
        try:
            user = self.request.user
              
            friends = Friend.objects.filter(user=user)  

            friends = FriendSerializer(friends,many=True)
            return Response({'data':friends.data})
        except:
            return Response({"error":"Something went wrong"})    
         

class StoreFriendView(APIView):

    def post(self, request, format=None):
        data = self.request.data
       
        user = self.request.user
        
        userid=0
        friend = data['friend_username']
        friendid = User.objects.get(username=friend).id # friend id is required in both accept and done status to add friend id in done and for making id in accept request status
        status = data['status']
        connectionid = ""
        print("USER : ",user," => ",data)
        if data['connectionid'] != "":
              connectionid = data["connectionid"]  
        else :
            try: 
                userid = self.request.user.id
            except Exception as e:
                print("error : ",e)    
                return Response({'error':'Something went wrong..'})
            
            connectionid = str(friendid)+''+str(userid)
          
        # After friend request acceptance
        timestamp = datetime.datetime.now()
        print("CID : ",connectionid)
        print("DATA : ",data)
        print("USER : ",user.username)
        
        result = ""
        try:
            # Friend.objects.create(user=user,username=user.username,friendid="12",friend="Ramesh",connectionid="123")
            
            result = Friend.objects.create(user=user,username=user.username,friendid=friendid,friend=friend,connectionid=connectionid)
            print("karo")
            # friend = Friend.objects.create(user=friend,username=friend,friendid=userid,friend=user,connectionid=connectionid)
            # Tio check for existing accept request
            res = Notifications.objects.filter(sender=friend,receiver=user,request="accept",info=connectionid)
            if len(res)>0:
                res[0].delete()
            else:    
            # To Store Accepted Notification to notify original sender for acceptance of his/her request
                res =  Notifications.objects.create(sender=user,receiver=friend,request=status,info=connectionid,timestamp=timestamp)
            # Notifications.objects.create(sender=sender,receiver=receiver,request=requestData,info=info,timestamp=timestamp)
            print("After CID")
            res = Notifications.objects.filter(sender=friend,receiver=user,request='sent')
            if len(res) > 0:
                res[0].delete()
            return Response({'success': 'Request sent successfully..'})
        except Exception as e:
            print("RESULT : ",result)
            print(e)
            print(e.__class__)
            return Response({'error': 'Something went wrong while sending feedback'})

# ////////////////////////////////////////////////////////////


# ////////////////////////////////////////////////////////////

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
