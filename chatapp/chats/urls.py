from django.urls import path
from .views import GetChatView,StoreChatView,DeleteChatView
urlpatterns = [
    path('getchats',GetChatView.as_view()),
    path('addchats',StoreChatView.as_view()),
    path('deletechats',DeleteChatView.as_view()),
    
]
