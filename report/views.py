import os
import json
import requests
from os import remove
from django.http import HttpResponse
from rest_framework.views import APIView
from .pdf_conversor import GetReport


class ReportView(APIView):

    def get(self, request):
        data = request.session["progress_students"]
        data['username'] = data['general']['full_name'].replace(' ', '_')
        pdf_r = GetReport(**data)
        pdf_r.from_template()
        with open(os.getcwd() + '/report/pdf_tmp/' + data['username'] +
                  '.pdf', 'rb') as pdf:
            response = HttpResponse(pdf.read(), content_type='application/pdf')
            response['Content-Disposition'] = 'inline; filename=' + \
                data['username']

        remove(os.getcwd() + '/report/pdf_tmp/' + data['username'] + '.pdf')
        return response
