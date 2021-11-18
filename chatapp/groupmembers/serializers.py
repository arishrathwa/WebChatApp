from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User

from .models import GroupMembers

class GroupMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupMembers
        fields = '__all__'