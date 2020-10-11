from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

'''
Voy a retornar el diccionario que guarde en cache al momento del login desde user_session.views.auth
para comprobar que la pagina si reciba los estudiantes relacionados.
'''
from django.views.decorators.csrf import csrf_exempt
@csrf_exempt
def progress_test(request):
    return HttpResponse(request.session.get("student"))
