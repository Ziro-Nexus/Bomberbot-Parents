from django.db import models

# Create your models here.

class AdviceModel1(models.Model):
    advice = models.TextField(null= True, blank=True)

    class Meta:
        verbose_name = "Congratulation"

class AdviceModel2(models.Model):
    advice = models.TextField(null= True, blank=True)

    class Meta:
        verbose_name = "Motivational taks ok"

class AdviceModel3(models.Model):
    advice = models.TextField(null= True, blank=True)

    class Meta:
        verbose_name = "Motivational overdue task"
