from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class TeacherModel(User):
    uuid = models.CharField(max_length=60, unique=True)
    class Meta:
        ordering = ['username']

    def __str__(self):
        return self.username

class StudentModel(User):
    uuid = models.CharField(max_length=60, unique=True)
    class Meta:
        ordering = ['username']

    def __str__(self):
        return self.username


class ParentsModel(User):
    uuid = models.CharField(max_length=60, unique=True)
    class Meta:
        ordering = ['username']
    
    def __str__(self):
        return self.username
    student_id = models.ManyToManyField(StudentModel)


class Classroom(models.Model):
    classroom_id = models.CharField(max_length=60, unique=True)
    slug = models.SlugField(max_length=60)
    name = models.CharField(max_length=60)
    access_code = models.CharField(max_length=60)
    selected_course = models.CharField(max_length=60)
    students = models.ManyToManyField(StudentModel)
    teachers = models.ManyToManyField(TeacherModel)

class ProyectOverview(models.Model):
    app_type = models.CharField(max_length=60)
    name = models.CharField(max_length=60)
    owner = models.ForeignKey(StudentModel, on_delete=models.CASCADE)
    description = models.CharField(max_length=500)
    reference = models.CharField(max_length=60)
    cover_image = models.URLField(max_length=100)
    classroom = models.ForeignKey(Classroom, on_delete=models.CASCADE)