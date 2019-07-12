from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer, ProfileSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.generics import UpdateAPIView, RetrieveAPIView
from .models import user, Profile
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthenticatedUser, IsProceedByUser, IsAnonymous
from knox.models import AuthToken
from django.contrib.auth.models import User
# from django.urls import reverse
# from django.views.decorators.csrf import csrf_exempt


@api_view(['POST', ])
@permission_classes([IsAnonymous])
def register(request, format=None):
    if request.method == 'POST':
        request.data["password"] = make_password(
            request.data["password"], salt=None, hasher='default')
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            p = Profile.objects.create(user=user.objects.get(
                username=serializer.data["username"]), name=serializer.data['first_name']+' '+serializer.data['last_name'], pk=user.objects.get(
                username=serializer.data["username"]).pk)
            p.save()
            return Response(
                {
                    "data": serializer.data,
                    'message': 'user has been successfully registered',
                    'token': AuthToken.objects.create(User.objects.get(username=serializer.data["username"]))[1]
                },
                status=status.HTTP_201_CREATED
            )
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateProfileView(UpdateAPIView):
    permission_classes = (
        IsAuthenticated, IsAuthenticatedUser, IsProceedByUser)
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return Profile.objects.filter(**self.kwargs)


class ProfileView(RetrieveAPIView):
    permission_classes = (
        IsAuthenticated, IsAuthenticatedUser, IsProceedByUser)
    serializer_class = ProfileSerializer

    def get_queryset(self):
        return Profile.objects.filter(**self.kwargs)
