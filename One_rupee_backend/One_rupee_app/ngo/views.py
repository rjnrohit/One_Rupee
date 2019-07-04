from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import NgoSerializer
from .models import Ngo
# Create your views here.


@api_view(['POST', ])
def register(request):
    if request.method == 'POST':
        serializer = NgoSerializer(data=request.data)
        print(request.GET)
        if serializer.is_valid():
            serializer.save()
            # we will implement json response later
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
