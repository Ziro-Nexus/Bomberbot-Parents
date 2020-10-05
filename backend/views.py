from django.shortcuts import render
from django.http import HttpResponse
import json
from django.forms.models import model_to_dict


def index(request):

    return render(request, "index.html")
