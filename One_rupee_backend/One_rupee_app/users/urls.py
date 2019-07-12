from django.urls import path, include
from . import views
from rest_framework.urlpatterns import format_suffix_patterns
from knox import views as knox_views

app_name = 'users'


urlpatterns = [
    path('', include('knox.urls')),
    path('register/', views.register, name='user-register'),
    path('view-profile/', views.ProfileView.as_view(), name='view-profile'),
    path('update-profile/', views.UpdateProfileView.as_view(), name='update-profile')
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
