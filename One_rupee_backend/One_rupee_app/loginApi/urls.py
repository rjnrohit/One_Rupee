from django.urls import path
from .views import LoginView, logout_view
from rest_framework.urlpatterns import format_suffix_patterns


app_name = 'loginApi'


urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('logout/', logout_view, name='logout'),
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
