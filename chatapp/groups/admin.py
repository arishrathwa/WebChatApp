from django.contrib import admin
from django.contrib.auth.models import Group

from .models import GroupChat

# Register your models here.
admin.site.register(GroupChat)