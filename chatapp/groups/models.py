from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class GroupChat(models.Model):
    user = models.OneToOneField(User,  on_delete=models.CASCADE)
    # friend = models.CharField(max_length=30)
    groupname = models.TextField(default="")
    groupid = models.TextField(default="")
    connectionid = models.TextField(default="")

    def __str__(self):
        return self.user.username