from django.urls import path
from .views import GetGroupView,StoreGroupView
urlpatterns = [
    path('getgroups',GetGroupView.as_view()),
    path('storegroups',StoreGroupView.as_view()),
]
