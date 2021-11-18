from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Friend

class FriendSerializer(serializers.ModelSerializer):
    class Meta:
        model = Friend
        fields = '__all__'