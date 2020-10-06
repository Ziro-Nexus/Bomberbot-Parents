from .models import StudentModel, ParentsModel
from .serializers import StudentSerializer, ParentsSerializer
from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.response import Response
import json
from django.forms.models import model_to_dict
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer


class StudentViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """

    queryset = StudentModel.objects.all()
    serializer_class = StudentSerializer


class ParentsViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """
    queryset = ParentsModel.objects.all()
    serializer_class = ParentsSerializer


@api_view(('POST',))
def auth_parent(request):
    if request.body:
        req = json.loads(request.body)
        for parent in ParentsModel.objects.all():
            parent = model_to_dict(parent)
            if parent["username"] == req["username"] and \
                    parent["password"] == req["password"]:
                return Response({"status": "ok"})
            else:
                return Response({"status": "invalid"})
    else:
        return Response({"status": "empty request"})

