from asyncio.windows_events import NULL
from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class UserStatus(models.Model):
    username = models.TextField(default="")
    channelname = models.TextField(default="")

    def __str__(self):
        return self.user

