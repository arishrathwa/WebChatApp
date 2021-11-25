from django.urls import path
from .views import GetNotificationView,StoreNotificationView
urlpatterns = [
    path('notify',StoreNotificationView.as_view()),
    path('getnotified',GetNotificationView.as_view()),
]
