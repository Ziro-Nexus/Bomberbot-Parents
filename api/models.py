from django.db import models

# Create your models here.
class Parent_Login(models.Model):
    username = models.CharField(max_length=20)
    passowrd = models.CharField(max_length=20)

    def __str__(self):
        return self.username
