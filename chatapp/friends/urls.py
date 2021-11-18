from django.urls import path
from .views import GetFriendView,StoreFriendView
urlpatterns = [
    path('getfriends',GetFriendView.as_view()),
    path('addfriend',StoreFriendView.as_view()),
]
