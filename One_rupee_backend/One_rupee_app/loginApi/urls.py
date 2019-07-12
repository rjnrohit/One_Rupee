from django.urls import path
from .views import LoginView, Logout
from rest_framework.urlpatterns import format_suffix_patterns
from knox import views as knox_views

app_name = 'loginApi'


urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', Logout.as_view(), name='logout'),
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
