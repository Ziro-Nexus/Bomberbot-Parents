from django.shortcuts import render
from django.http import HttpResponse
import json
from django.forms.models import model_to_dict
from mod.views import auth_parent
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
def auth(request):
    return auth_parent(request)

def index(request):
    return render(request, "index.html")
