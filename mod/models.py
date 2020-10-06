from django.db import models
from django.contrib.auth.models import User
import uuid


class StudentModel(User):
    uuid = models.CharField(max_length=60, unique=True, default=uuid.uuid4)
    class Meta:
        ordering = ['uuid']

    def __str__(self):
        return self.username


class ParentsModel(User):
    uuid = models.CharField(max_length=60, unique=True, default=uuid.uuid4)
    class Meta:
        ordering = ['uuid']
    
    def __str__(self):
        return self.username
    student_id = models.ManyToManyField(StudentModel)
