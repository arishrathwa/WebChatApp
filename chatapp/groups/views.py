from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from rest_framework import permissions
from django.contrib.auth.models import User
from .models  import  GroupChat
from .serializers import GroupSerializer
# Create your views here.

class GetGroupView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self,request,format=None):
        data = self.request.data
        user = self.request.user
        try:
            groups = GroupChat.objects.filter(user=user)  
            groups = GroupSerializer(groups,many=True)
            return Response({"groups":groups.data,"success":"Fetched data.."})
        except:
            return Response({"error":"Something went wrong while fetching friend list.."})

class StoreGroupView(APIView):

    def post(self, request, format=None):
        data = self.request.data

        user = self.request.user
        # friend = data['friend_username']
        connectionid = data['connectionid']
       

        try:
            friend = GroupChat.objects.create(user=user,connectionid=connectionid)
            # friend = GroupChat.objects.create(user=friend,connectionid=connectionid)
            
            return Response({'success': 'Feedback sent successfully..'})
        except:
            return Response({'error': 'Something went wrong while sending feedback'})
