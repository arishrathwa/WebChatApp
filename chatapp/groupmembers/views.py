from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from rest_framework import permissions
from django.contrib.auth.models import User
from .models  import  GroupMembers
from .serializers import GroupMemberSerializer
# Create your views here.

class GetGroupMembersView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def post(self,request,format=None):
        try:
            data = self.request.data
            user = self.request.user
            username = user.username
            connectionid = data["connectionid"]
            group_members = GroupMembers.objects.filter(connectionid=connectionid)  

            group_members = GroupMemberSerializer(group_members,many=True)
            return Response({'group':group_members.data,'username':username})
        except:
            return Response({"error":"Something went wrong"})    
         

class StoreGroupMemberView(APIView):

    def post(self, request, format=None):
        
        data = self.request.data

        user = self.request.user
        connectionid = data['connectionid']
       

        try:
            member = GroupMembers.objects.create(user=user,connectionid=connectionid)
            #member = GroupMembers.objects.create(user=friend,friend=user,connectionid=connectionid)
            return Response({'success': 'Entered Group successfully..'})
        except:
            return Response({'error': 'Something went wrong while adding'})

