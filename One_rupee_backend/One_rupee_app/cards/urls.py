from django.urls import path
from .views import CardListView, CardCreateView, CardDeleteView, CardUpdateView, CardDetailView
from .views import AllCardListView
from rest_framework.urlpatterns import format_suffix_patterns


app_name = 'cards'


urlpatterns = [
    path('all-cards/', AllCardListView.as_view(), name='all-cards'),
    path('card-list-view/<str:username>/',
         CardListView.as_view(), name='card-list-view'),
    path('card-detail-view/<int:pk>/',
         CardDetailView.as_view(), name='card-detail-view'),
    path('card-create-view/<str:username>/',
         CardCreateView.as_view(), name='card-create-view'),
    path('card-delete-view/<int:pk>/',
         CardDeleteView.as_view(), name='card-delete-view'),
    path('card-update-view/<int:pk>/',
         CardUpdateView.as_view(), name='card-update-view'),
]
urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
