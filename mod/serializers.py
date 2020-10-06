from rest_framework import serializers
from .models import ParentsModel,StudentModel

# Create your views here.

class ParentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ParentsModel
        fields = ['username', 
                  'password', 
                  'email',
                  'student_id'
                  ]
class StudentSerializer(serializers.ModelSerializer):

    class Meta:
        model = StudentModel
        fields = ['username',
                  'password',
                  'email',
                  'uuid'
                  ]
