
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
        # DB******************************************************************************
        # res = await self.registerUserStatus(ChatConsumer.count,self.channel_name)
            #....................................................... 
        self.messages = []
        print(self.scope["session"])
        print(self.scope)
        print("USER : ",self.scope['user'])
         # Join room group
        await self.channel_layer.group_add(
            self.room_group_name,
            self.channel_name
        )    
        await self.accept()
        # print(roomName)
        # await self.checkExistingRoom(roomName)
        # count = len(self.messages)
        # if len(self.messages) > 0:
        #     for msg in self.messages:
        #             await self.channel_layer.group_send(
        #                     self.room_group_name,
        #                     {
        #                         'type': 'chat_message',
        #                         'message': msg.content,
        #                         'sender':msg.user,
        #                         'connectionid':msg.connectionid,
        #                         'messagecount': count
        #                     }
        #             )
        #             count = count - 1
        
       



    # @database_sync_to_async
    # def checkExistingRoom(self,connectionid):
    #     try:
    #         print("In CHECK")
    #         messages = Message.objects.filter(connectionid=connectionid).order_by('id')
    #         print("MESSAGES : ",messages[0].connectionid)
    #         print(len(messages))
    #         if len(messages)>0:
    #             self.messages = messages
                
                
    #     except:
    #         print("Someting went wrong..")
        

    async def disconnect(self, close_code):
        # print(self.channel_layer.group)
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
        # status = await self.set_msg(connectionid,message,sender)
        # print("DB_STATUS : ",status)
    # Receive message from room group
    async def chat_message(self, event):
        # messageStamp = "new"
        # messagecount = 1
        message = event['message']
        sender = event['sender']
        # timestamp = datetime.datetime.now()
        # connectionid = 0
        # if event['connectionid'] == 0:
        #  connectionid = self.room_name
        # else:
        #  connectionid = event['connectionid']   
        #  messageStamp = "old" 
        #  messagecount = event['messagecount']
         
        #Save to database
        # status = True
        
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'message': message,
            'sender':sender,
          # 'timestamp':timestamp,
            # 'connectionid':connectionid,
            # 'status':status,
            # 'messagestamp':messageStamp,
            # 'messagecount':messagecount,
        }))
        

            
    # @database_sync_to_async
    # def set_msg(self,connectionid,message,sender):
    #     print("ARRRRRR")
    #     try:
    #         status = ChatMessage.objects.create(
    #             user=sender,
    #             connectionid=connectionid,
    #             content = message,
    #         )
    #     except:
    #         return False    
    #     return True

        
        





# SYNCHRONOUS
# # chat/consumers.py
# import json
# from asgiref.sync import async_to_sync
# from channels.generic.websocket import WebsocketConsumer

# class ChatConsumer(WebsocketConsumer):
#     def connect(self):
#         self.room_name = self.scope['url_route']['kwargs']['room_name']
#         self.room_group_name = 'chat_%s' % self.room_name

#         # Join room group
#         async_to_sync(self.channel_layer.group_add)(
#             self.room_group_name,
#             self.channel_name
#         )

#         self.accept()

#     def disconnect(self, close_code):
#         # Leave room group
#         async_to_sync(self.channel_layer.group_discard)(
#             self.room_group_name,
#             self.channel_name
#         )

#     # Receive message from WebSocket
#     def receive(self, text_data):
#         text_data_json = json.loads(text_data)
#         message = text_data_json['message']
#         sender = text_data_json['sender']
#         print("Message  : ",message)
#         print("sender : ",sender)
#         # Send message to room group
#         async_to_sync(self.channel_layer.group_send)(
#             self.room_group_name,
#             {
#                 'type': 'chat_message',#method name defined below
#                 'message': message,
#                 'sender' : sender,
#             }
#         )

#     # Receive message from room group
#     def chat_message(self, event):
#         message = event['message']
#         sender = event['sender']
#         # Send message to WebSocket
#         self.send(text_data=json.dumps({
#             'message': message,
#             'sender': sender,
#         }))
