from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from .serializers import UserSerializer
from django.contrib.auth.hashers import make_password
# from django.urls import reverse
# from django.views.decorators.csrf import csrf_exempt


@api_view(['POST', ])
def register(request, format=None):
    if request.method == 'POST':
        request.data["password"] = make_password(
            request.data["password"], salt=None, hasher='default')
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data, 'message': 'user has been successfully registered'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
