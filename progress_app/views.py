import json
import requests
from .progress import ProgressStudent
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.exceptions import APIException


class ProgressView(APIView):
    """ Progress view """
    parser_classes = [JSONParser]

    def post(self, request, format=None):
        """ Validate student id searches and processes
            their information and caches it
        """
        # All students data related to the parent who logged in is obtained
        data_students = request.session.get("students")

        # The id of the student to consult is obtained
        student = request.data.get('id_student')
        id_student = student[0]['id']

        # We generate a dictionary with the following
        # form {"student_id": "student_data", ...}
        try:
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

            if studen_obj.advices():
                progress_info['advice'] = studen_obj.advices()
            else:
                raise Exception

            request.session["progress_students"] = progress_info

        except Exception:
            return Response({"Status": "Failed"}, status=500)

        # return Response(request.session["progress_students"])
        return Response({"Status": "OK"})

    def get(self, request):
        """ Returns students data """

        if "progress_students" in request.session:
            return Response(request.session["progress_students"])
        else:
            return Response({"Status": "Failed"}, status=500)
