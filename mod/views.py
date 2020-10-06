from .models import StudentModel, ParentsModel
from .serializers import StudentSerializer, ParentsSerializer
from django.contrib.auth.models import User
from rest_framework import status, viewsets
from rest_framework.decorators import action
from rest_framework.views import APIView
from rest_framework.response import Response


class StudentViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """

    queryset = StudentModel.objects.all()
    serializer_class = StudentSerializer

    @action(detail=True, methods=['put'])
    def validate_user(self, request, pk=None):
        user = self.get_object()
        
        return Response({'status': 'password set'}, status=status.HTTP_400_BAD_REQUEST)


class ParentsViewSet(viewsets.ModelViewSet):
    """
    A viewset that provides the standard actions
    """

    queryset = ParentsModel.objects.all()
    serializer_class =ParentsSerializer
    def post(self):
        return Response("Hi")
