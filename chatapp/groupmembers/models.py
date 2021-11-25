from django.db import models
from groups.models import GroupChat
from django.contrib.auth.models import User
# Create your models here.
class GroupMembers(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    groupname = models.TextField(default="")
    groupid = models.TextField(default="")
    connectionid = models.CharField(max_length=30,default="")

    def __str__(self)->str:
        return self.user.username