from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE) 
    # Every single user has their profile model they are hooked upto
    # and every user profile has a user that they are hooked upto => one to one relationship
    # we don;t have multiple profiles for single user and not multiple users for single user

    # on_delete = CASCADE means on user deletion this profile also gets deleted and removed from the database
    # we can have on_delete = DO_NOTHING for feedbacks,reviews and rating to stay even though user gets deleted 
    first_name = models.CharField(max_length=255,default='')
    last_name = models.CharField(max_length=255,default='')
    phone = models.CharField(max_length=20,default='')
    city = models.CharField(max_length=20,default='')

    def __str__(self) -> str:
        return self.first_name