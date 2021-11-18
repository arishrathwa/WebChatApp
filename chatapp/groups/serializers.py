from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import GroupChat

class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupChat
        fields = '__all__'