from django.shortcuts import render, redirect, get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer, ProfileSerializer
from django.contrib.auth.hashers import make_password
from rest_framework.generics import UpdateAPIView
from .models import user, Profile
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthenticatedUser, IsProceedByUser, IsAnonymous
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
                username=serializer.data["username"]), name=serializer.data['first_name']+' '+serializer.data['last_name'])
            p.save()
            return Response({"data": serializer.data, 'message': 'user has been successfully registered'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateProfileView(UpdateAPIView):
    permission_classes = (
        IsAuthenticated, IsAuthenticatedUser, IsProceedByUser)
    serializer_class = ProfileSerializer

    def get_queryset(self):
        query_name = self.request.user.username
        ngo = get_object_or_404(user, username=ngo_name)
        return ngo.profile
