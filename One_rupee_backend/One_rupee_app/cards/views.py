from django.shortcuts import render
from .models import Card
from ngo.models import Ngo
from .serializers import CardSerializer
from django.shortcuts import get_object_or_404
from rest_framework.generics import CreateAPIView, ListAPIView, ListCreateAPIView
from rest_framework.generics import RetrieveAPIView, DestroyAPIView, UpdateAPIView
from rest_framework.generics import RetrieveDestroyAPIView, RetrieveUpdateDestroyAPIView
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthenticatedUserNgo, ReadOnly, IsProceedByNgo
# Create your views here.


class AllCardListView(ListAPIView):
    permission_classes = (IsAuthenticated, ReadOnly)
    serializer_class = CardSerializer
    queryset = Card.objects.all()


class CardListView(ListAPIView):
    permission_classes = (IsAuthenticated, IsAuthenticatedUserNgo)
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo)


class CardDetailView(RetrieveAPIView):
    permission_classes = (IsAuthenticated, ReadOnly)
    serializer_class = CardSerializer

    def get_queryset(self):
        print("yes")
        ngo_name = self.request.user.username
        print(ngo_name)
        ngo = get_object_or_404(Ngo, username=ngo_name)
        print(ngo.username)
        return ngo.card_set.filter(ngo=ngo, **self.kwargs)


class CardCreateView(CreateAPIView):
    permission_classes = (IsAuthenticated, IsAuthenticatedUserNgo)
    queryset = Card.objects.all()
    serializer_class = CardSerializer

    def perform_create(self, serializer):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        serializer.save(ngo=ngo)


class CardUpdateView(UpdateAPIView):
    permission_classes = (IsAuthenticated, IsProceedByNgo,
                          IsAuthenticatedUserNgo)
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo, pk=self.pk)


class CardDeleteView(DestroyAPIView):
    permission_classes = (
        IsAuthenticated, IsAuthenticatedUserNgo, IsProceedByNgo)
    serializer_class = CardSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return Card.objects.all().filter(ngo=ngo, pk=self.pk)
