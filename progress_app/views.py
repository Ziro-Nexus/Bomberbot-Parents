import json
import requests
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework.response import Response
from .progress import ProgressStudent
# Create your views here.


class ProgressView(APIView):
    parser_classes = [JSONParser]

    def post(self, request):
        # All students data related to the parent who logged in is obtained
        data_students = request.session.get("students")
        
        #The id of the student to consult is obtained
        student = request.data.get('id_student')
        id_student = student[0]['id']
        
        # We generate a dictionary with the following
        # form {"student_id": "student_data", ...}
        dict_student = {}
        for stud in data_students:
            dict_student[stud['id']] = stud
        
        # The student's data is selected by id
        data = dict_student[id_student]
        
        # Instantiate the class to process student data
        studen_obj = ProgressStudent(**data)
    
        progress_info = {}

        progress_info['general'] = studen_obj.general_inf()
        
        progress_info['projects'] = studen_obj.projects()
        
        progress_info['advice'] = studen_obj.advices()
        
        response = json.dumps(progress_info)

        request.session["progress_students"] = response
        
        return Response({"Status": "OK"})


    def get(self, request):
        if "progress_students" in request.session:
            return Response(request.session["progress_students"])
        else:
            return Response({"Status": "Failed"}, status=302)
