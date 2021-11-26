from rest_framework.response import Response
# it will dispatch request to appropriate handler method
from rest_framework.views import APIView
from rest_framework import permissions
from .models import Notifications
from .serializers import NotificationSerializer

import datetime
class StoreNotificationView(APIView):

    def post(self,request,format=None):
        data = self.request.data
        print(data)
        sender = data['sender']
        receiver = data['receiver']
        requestData = data['status']
        info = data['info']
        timestamp = datetime.datetime.now()
        if requestData == 'deny': # state of requestData {sent,accept,deny} on deny don't store
            res = Notifications.objects.filter(sender=sender,receiver=receiver)[0].delete()
            return Response({'success':'not friends'})
        elif requestData == "accept":
            # res = Notifications.objects.filter(sender=sender,receiver=receiver)[0].delete()
            res = Notifications.objects.create(sender=receiver,receiver=sender,request=requestData,info="",timestamp=timestamp)
            return Response({'success':'friends'})
                
        try:
            res = Notifications.objects.create(sender=sender,receiver=receiver,request=requestData,info=info,timestamp=timestamp)
            return Response({'success':'Successfully stored'})
        except:  
            return Response({'error':'something went wrong...'})  

class GetNotificationView(APIView):

    def post(self,request,format=True):
        data = self.request.data
        receiver = data['username']

        try:
            res = Notifications.objects.filter(receiver=receiver)
            res = NotificationSerializer(res,many=True)
            return Response({"data":res.data})
        except:
            return Response({"error":"Something went wrong.."})
        