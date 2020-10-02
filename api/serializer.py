 
from rest_framework import serializers
from .models import Parent_Login

class ParentsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Parent_Login
        fields = ('username', 'password')
