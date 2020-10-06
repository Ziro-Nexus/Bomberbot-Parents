from django.shortcuts import render
from rest_framework import viewsets
from .serializer import ParentsSerializer
from .models import Parent_Login

# Create your views here.

class ParentsLogin(viewsets.ModelViewSet):
    queryset = Parent_Login.objects.all().order_by('username')
    serializer_class = Parent_Login
