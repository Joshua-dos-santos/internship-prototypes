# django_performanceapp/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.connect_to_websocket, name='connect_to_websocket'),
]
