from django.shortcuts import render
from api.models import Parent_Login
from django.http import HttpResponse
import json
from django.forms.models import model_to_dict


def login(request):

    lista = []
    obj = Parent_Login.objects.all()
    for item in obj:
        lista.append({
            "username": model_to_dict(item)["username"],
            "password": model_to_dict(item)["passowrd"]
        })


    return HttpResponse(json.dumps(lista))


def index(request):

    return render(request, "index.html")
