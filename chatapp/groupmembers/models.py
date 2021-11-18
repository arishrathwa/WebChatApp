from django.db import models
from groups.models import GroupChat
# Create your models here.
class GroupMembers(models.Model):
    user = models.OneToOneField(GroupChat,on_delete=models.CASCADE)
    connectionid = models.CharField(max_length=30,default="")

    def __str__(self)->str:
        return self.user.username