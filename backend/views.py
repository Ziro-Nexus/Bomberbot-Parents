from django.shortcuts import render


def index(request):
    return render(request, "index.html")

def ruta2(request):
    return render(request, "ruta2.html")
