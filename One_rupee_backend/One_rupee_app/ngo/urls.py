from django.urls import path, include
from . import views


app_name = 'ngo'


urlpatterns = [
    path('register/', views.register, name='ngo-register')
]
