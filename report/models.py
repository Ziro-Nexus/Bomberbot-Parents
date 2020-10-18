from django.db import models

# Create your models here.

class ReportFile(models.Model):
    #name = por definir como formar nombre
    pdf_file = models.FileField(upload_to= "ruta dir")
