
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
        
        # FETCH OLD MESSAGES TO LOAD IN CHAT SECTION

        await self.checkExistingRoom(roomName)
        count = len(self.messages)
        if len(self.messages) > 0:
            for msg in self.messages:
                    await self.channel_layer.group_send(
                            self.room_group_name,
                            {
                                'type': 'chat_message',
                                'message': msg.content,
                                'sender':msg.sender,
                                'connectionid':msg.connectionid,
                                'fakecount':msg.fakecount,
                                'messagecount': count
                            }
                    )
                    count = count - 1

        # -----------------------------------------
    
                
   #............................................................................................

    @database_sync_to_async
    def checkExistingRoom(self,connectionid):
        try:
            print("In CHECK")
            messages = Message.objects.filter(connectionid=connectionid).order_by('id')
            print("MESSAGES : ",messages[0].connectionid)
            print(len(messages))
            if len(messages)>0:
                self.messages = messages
                
                
        except:
            print("Someting went wrong..")    

   #............................................................................................
        

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
        #_____CALL TO CHECK EXISTING MESSAGES IN DATABASE______

        existing_message = await self.check_msg(message)
        
        commonchatid = 0

        if existing_message:
            print("EXISTING MESSAGES : ",str(existing_message.commonchatid))  
            commonchatid = existing_message.commonchatid
            fakecount = existing_message.fakecount
        else:
            print("SOmething went WRONG..!!") 

        #------------------------------------------------------
        #_________CALL TO STORE MESSAGES IN DATABASE___________
        status = await self.set_msg(connectionid,message,sender,commonchatid)
        print("DB_STATUS : ",status)
        #_______________________________________________________
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
       

    #///////////_________________STORING CHAT MESSAGES__________________

    @database_sync_to_async
    def set_msg(self,connectionid,message,sender,commonchatid):
       
       
        fakecount = 0
        timestamp = datetime.datetime.now()
        print("SENDER : ",sender)   
        print("ARRRRRR")
        try:
            status = Message.objects.create(
                user=self.scope['user'],
                sender=sender,
                connectionid=connectionid,
                fakecount = fakecount,
                commonchatid = commonchatid,
                content = message,
                timestamp = timestamp
            )
            print("Arrived here")
            if commonchatid == 0:
                #--------- FETCHING EXISTING MESSAGE ------------------------------------- 
               msg =  Message.objects.filter(sender=sender,content=message,timestamp=timestamp)[0]
               print("maysage : ",msg)
               id = msg.id
               print("ayd : ",id)
               # ----------UPDATING COMMON CHAT ID TO TRACK COMMON MESSAGES----------------
               Message.objects.filter(sender=sender,content=message,timestamp=timestamp).update(commonchatid=id)

        except Exception as e:
            print("Something went wrong in storing or updating idsss...",e)
            return False    
        return True

    #//////////--------------------------------------------------///////

    #--------------__METHOD TO CHECK FOR SAME MESSAGES EXISTANCE__----------

    @database_sync_to_async
    def check_msg(self,message):
        print("In check message : ")    
        try:
            # FILTERING ECISTING MESSAGES IN REVERSE ORDER TO HAVE LATEST FIRST
            existing_messages = Message.objects.filter(
                content__iexact=message
            ).order_by('id').reverse()
        except Exception as e:
            print("FETCh gone wrong",e)
            return False  
        
        if len(existing_messages) == 0:
            return False      
        return existing_messages[0]

    #-----------------------------------------------------------------------
        

            
   