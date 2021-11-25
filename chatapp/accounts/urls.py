from django.urls import path
from .views import SignUpView,GetCSRFToken,LoginView,LogoutView,CheckAuthenticatedView,DeleteAccountView,GetUsersView,GetFeedbacksView,StoreFeedbackView
from .views import GetSearchedUsersView
urlpatterns = [
    path('authenticated',CheckAuthenticatedView.as_view()),
    path('register',SignUpView.as_view()),
    path('login',LoginView.as_view()), 
    path('logout',LogoutView.as_view()),
    path('delete',DeleteAccountView.as_view()),
    path('get_users',GetUsersView.as_view()),
    path('get_searched_users',GetSearchedUsersView.as_view()),
    path('feedback',StoreFeedbackView.as_view()),
    path('csrf_cookie',GetCSRFToken.as_view()),
]   
