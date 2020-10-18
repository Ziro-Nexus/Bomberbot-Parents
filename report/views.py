import json
import requests
from .models import ReportFile
from django.http import FileResponse
from rest_framework.views import APIView
from django.core.files import File
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from .pdf_conversor import Components, PDFConversor, GetReport


class ReportView(APIView):
    

    def get(self, request):
        data = request.session["progress_students"]
        data['username'] = data['general']['full_name']
        pdf = GetReport(**data)
        pdf.from_template()
        """with open('/path/to/existing_file.txt') as f:
            wrapped_file = File(f)
            pdf = ReportFile(pdf_file= wrapped_file)
            pdf.save()

        pdf_response = ReportFile.objects.filter("pendiente")
        response = FileResponse(pdf_response.pdf_file, content_type='application/pdf')
        response['Content-Disposition'] = 'attachment; filename="{0}.pdf"'.format(pdf_response.name)"""

        return Response({"Status": "OK"})
        #return response
