import json
import requests
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class ProgressView(APIView):
    def post(self, request):
        # All students data related to the parent who logged in is obtained
        data_students = request.session.get("student")
        
        #The id of the student to consult is obtained
        student = request.data.get('id_student')
        id_student = student[0]['id']
        
        # We generate a dictionary with the following
        # form {"student_id": "student_data", ...}
        dict_student = {}
        for stud in data_students:
            dict_student[stud['id']] = stud
        data = dict_student[id_student]
        #data = json.dumps(data)
        print(type(data))
        
        return Response(data)
