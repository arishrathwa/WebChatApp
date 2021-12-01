
#ASYNCHRONOUS

# chat/consumers.py
import json
from channels.generic.websocket import AsyncWebsocketConsumer

from channels.db import database_sync_to_async
from chats.serializers import MessageSerializer
from chats.models import Message

import datetime

class ChatConsumer(AsyncWebsocketConsumer):
    count = 1
    async def connect(self):
        self.room_name = self.scope['url_route']['kwargs']['room_name']
        self.room_group_name = 'chat_%s' % self.room_name
        roomName = self.room_name
        print("CHANNEL RECEIVE : ",self.channel_receive)
        print("CHANNEL NAME : ",self.channel_name)
        self.messages = []
        # print(self.scope["session"])
        # print(self.scope)
        print("USER : ",self.scope['user'])
         # Join room group
        res = await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )    
        print("RES : ",res)
        await self.accept()
        # print("connected..")
    
                
   
        

    async def disconnect(self, close_code):
      
        # Leave room group
        print("ROOM GROUP NAME : ",self.room_group_name)
        print("CHANNEL NAME : ",self.channel_name)

        

        await self.channel_layer.group_discard(
            self.room_group_name,
            self.channel_name
        )

    

    # Receive message from WebSocket
    async def receive(self, text_data):
        text_data_json = json.loads(text_data)
        message = text_data_json['message']
        sender = text_data_json['sender']
        connectionid = self.room_name
        print("msg : ",text_data_json)
        # Send message to room group
        await self.channel_layer.group_send(
            self.room_group_name,
            {
                'type': 'chat_message',
                'message': message,
                'sender':sender,
                'connectionid':0,#default
            }
        )
       
    # Receive message from room group
    async def chat_message(self, event):
      
        message = event['message']
        sender = event['sender']
        
        connectionid = 0
        if event['connectionid'] == 0:
         connectionid = self.room_name
        else:
         connectionid = event['connectionid']   
        
        print("sending msg : ",sender," : ",message)
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'sender':sender,
      
            'connectionid':connectionid,
          
        }))
        

            
   