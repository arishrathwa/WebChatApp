from django.db import models


class Notifications(models.Model):
    sender = models.TextField(max_length=30)
    receiver = models.TextField(max_length=200)
    request = models.TextField()
    info = models.TextField()
    timestamp = models.DateTimeField()

    def __str__(self) -> str:
        return self.c
