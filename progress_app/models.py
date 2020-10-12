from django.db import models

# Create your models here.

class AdviceModel(models.Model):
    advice_ok = models.TextField(null= True, blank=True, verbose_name="Congratulations")
    advice_mid = models.TextField(null= True, blank=True, verbose_name="Advice")
    advice_urgent = models.TextField(null= True, blank=True, verbose_name="Urgent advice")
