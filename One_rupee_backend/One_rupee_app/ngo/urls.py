from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns

app_name = 'ngo'


urlpatterns = [
    path('register/', views.register, name='ngo-register')
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
