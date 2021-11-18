from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class GroupChat(models.Model):
    user = models.OneToOneField(User,  on_delete=models.CASCADE)
    # friend = models.CharField(max_length=30)
    connectionid = models.CharField(max_length=30)

    def __str__(self):
        return self.user.username