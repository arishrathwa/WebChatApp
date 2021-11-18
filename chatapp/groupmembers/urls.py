from django.urls import path
from .views import GetGroupMembersView,StoreGroupMemberView
urlpatterns = [
    path('getgroupmembers',GetGroupMembersView.as_view()),
    path('addgroupmember',StoreGroupMemberView.as_view()),
]
