from django.shortcuts import render
import json
import requests
from django.http import HttpResponse
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
import requests
from rest_framework.decorators import api_view


@api_view(('POST',))
def auth(request):

    headers = {
        'Content-Type': 'application/json'
    }

    auth = json.loads(request.body)
    url = 'https://speedcoder.pythonanywhere.com/bomberbot_api/'

    r = requests.post(url, headers=headers, data=json.dumps(auth))
    response_json = r.json()

    response = [{"status": "OK", "students": []}]
    if r.status_code == 200:
        for student in response_json:
            response[0]["students"].append({
                "first_name" : student["firts_name"],
                "last_name":   student["last_name"],
                "id": student["id"]
            })
        return Response(response)


    return Response(r.json())
