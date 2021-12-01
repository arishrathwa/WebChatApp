from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView # it will dispatch request to appropriate handler method
from rest_framework import permissions
from django.contrib.auth.models import User
from .models  import Message
from .serializers import MessageSerializer
import datetime
import random
# Create your views here.

class GetChatView(APIView):
    permission_classes = (permissions.AllowAny,)
    
    def get(self,request,format=None):
        data = self.request.data
        connectionid = data["connectionid"]
        messages = Message.objects.filter(connectionid=connectionid).order_by('-id')[:10:-1]  

        messages = MessageSerializer(messages,many=True)
        return Response(messages.data)
         

class StoreChatView(APIView):

    def post(self, request, format=None):
        data = self.request.data

        user = self.request.user
        connectionid = data['connectionid']
        fakecount = data['fakecount']
        commonchatid = data['commonchatid']
        content = data["message"]
        timestamp = datetime.timezone.now()
       

        try:

            getSameMessages = Message.objects.filter(content=content)
            getSameMessages = MessageSerializer(getSameMessages,many = True)
            if len(getSameMessages) > 0:
                commonchatid = getSameMessages.data[0].commonchatid
            else: 
                commonchatid = random.random(1,100000,0.2)    

            latestMessage =  Message.objects.filter(commonchatid=commonchatid).order_by('-id')
            if latestMessage[len(latestMessage)-1].fakecount > 5:
                Message.objects.filter(commonchatid=commonchatid).delete()    

            message = Message.objects.create(
                user=user,
                connectionid=connectionid,
                fakecount=fakecount,
                commonchatid=commonchatid,
                content=content,
                timestamp=timestamp)
            return Response({'success': 'Message sent successfully..'})
        except:
            return Response({'error': 'Something went wrong while sending message'})

class DeleteChatView(APIView):

    def post(self,request,format=None):
        data = self.request.data
        id = data["msgid"]
        try:
            Message.objects.filter(id=id).delete()
        except:    
            return Response({'error':'Unable to delete'})