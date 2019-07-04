from django.urls import path
from . import views
from rest_framework.urlpatterns import format_suffix_patterns


app_name = 'users'


urlpatterns = [
    path('register/', views.register, name='user-register'),
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
