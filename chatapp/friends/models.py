from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Friend(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE)
    friendid = models.TextField(default="")
    friend = models.CharField(max_length=30)
    connectionid = models.TextField(default="")

    def __str__(self)->str:
        return self.user.username