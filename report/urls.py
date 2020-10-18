from django.urls import path, include
from . import views

urlpatterns = [
    path('report/', views.ReportView.as_view()),
]
