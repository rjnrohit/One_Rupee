from django.urls import path, include
from .views import PayView, PaymentUserView, PaymentNgoView, handleRequestFromPaytm
from rest_framework.urlpatterns import format_suffix_patterns


app_name = 'users'


urlpatterns = [
    path('', PayView.as_view(), name='payment'),
    path('users-payment/<str:username>/',
         PaymentUserView.as_view(), name='users-payment'),
    path('ngo-payment/<str:ngo_name>/',
         PaymentNgoView.as_view(), name='ngo-payment'),
    path('handleRequestFromPaytm/', handleRequestFromPaytm,
         name='handleRequestFromPaytm')


]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
