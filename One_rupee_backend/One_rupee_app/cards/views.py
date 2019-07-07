from django.shortcuts import render
from .models import Card
from ngo.models import Ngo
from .serializers import CardSerializer
from django.shortcuts import get_object_or_404
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView
from rest_framework.generics import RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.generics import RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.


class AllCardListView(ListAPIView):
    serializer_class = CardSerializer
    queryset = Card.objects.all()


class CardListView(ListAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo)


class CardDetailView(RetrieveAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo, pk=self.pk)


class CardCreateView(CreateAPIView):
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    def perform_create(self, serializer):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        serializer.save(ngo=ngo)


class CardUpdateView(UpdateAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo, pk=self.pk)


class CardDeleteView(DestroyAPIView):
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo, pk=self.pk)
