import os
import json
import codecs
import requests
from os import remove
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from .pdf_conversor import GetReport


class ReportView(APIView):
    

    def get(self, request):
        data = request.session["progress_students"]
        data['username'] = data['general']['full_name']
        pdf_r = GetReport(**data)
        pdf_r.from_template()
        with open('Suad Abuchaibe.pdf', 'rb') as pdf:
            response = HttpResponse(pdf.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'inline; filename=Suad Abuchaibe.pdf'

        remove('Suad Abuchaibe.pdf')
        return response
