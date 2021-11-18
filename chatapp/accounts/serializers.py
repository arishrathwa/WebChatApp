from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Feedbacks

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username') # to have all the fields serialized __all__ is used

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedbacks
        fields = '__all__'