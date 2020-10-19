import json
from django.http import HttpResponse, FileResponse, Http404, HttpResponseRedirect
from rest_framework.response import Response
import requests
from rest_framework.decorators import api_view




# Handle Logout, delete cookies on the browser
@api_view(('GET',))
def logout(request):

    if "related_students" in request.session.keys():
        del request.session["related_students"]

    if "progress_students" in request.session.keys():
        del request.session["progress_students"]
    
    if "students" in request.session.keys():
        del request.session["students"]

    return HttpResponseRedirect("http://127.0.0.1:8000/index/")


# Activate related students only when login is true
@api_view(('GET',))
def related_students(request):
    if "related_students" in request.session:
        return Response(request.session["related_students"])
    else:
        return HttpResponseRedirect("http://127.0.0.1:8000/loginParents")

# Validate user session
@api_view(('POST',))
def auth(request):
    headers = {
        'Content-Type': 'application/json'
    }
    auth = json.loads(request.body)
    url = 'https://speedcoder.pythonanywhere.com/bomberbot_api/'
    r = requests.post(url, headers=headers, data=json.dumps(auth))
    response_json = r.json()
    response = {"students": []}
    if r.status_code == 200:
        if type(response_json) in [list]:
            request.session["students"] = response_json
            for student in response_json:
                response["students"].append({
                    "first_name" : student["firts_name"],
                    "last_name":   student["last_name"],
                    "id": student["id"]
                })
            request.session["related_students"] = response
            return Response({"Status": "OK"})

    response["Status"] = response_json["Status"]
    request.session["related_students"] = json.dumps(response_json)
    return Response(json.dumps({"Status": response_json["Status"]}))



""" @api_view(('GET',))
def pdf_view(request):
    try:
        return FileResponse(open('pdf_report/test1.pdf', 'rb'), content_type='application/pdf')
    except FileNotFoundError:
        raise Http404() """
