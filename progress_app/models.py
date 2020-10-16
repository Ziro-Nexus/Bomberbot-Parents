from django.db import models

# Create your models here.


class AdviceModel1(models.Model):
    """ Model to store message when the student
        finished the whole course
    """
    advice = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Congratulation"


class AdviceModel2(models.Model):
    """ Model to store message when the student has not
        finished the course but is up to date with his tasks
    """
    advice = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Motivational taks ok"


class AdviceModel3(models.Model):
    """ Model to store message when the
        student has overdue tasks
    """
    advice = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name = "Motivational overdue task"
