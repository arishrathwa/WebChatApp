
from django.db import models


class Feedbacks(models.Model):
    feedback = models.TextField(max_length=200)
    timestamp = models.DateTimeField()
    sender = models.CharField(max_length=30)

    def __str__(self) -> str:
        return self.c
