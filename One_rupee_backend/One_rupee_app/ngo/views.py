from django.shortcuts import render
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import NgoSerializer
from .models import Ngo
from django.contrib.auth.models import AnonymousUser
from django.contrib.auth.hashers import make_password
from rest_framework.generics import UpdateAPIView
from .serializers import ProfileSerializer
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from .permissions import IsAuthenticatedUserNgo, IsProceedByNgo


@api_view(['POST', ])
@permission_classes([])
def register(request):
    if request.method == 'POST':
        request.data["password"] = make_password(
            request.data["password"], salt=None, hasher='default')
        serializer = NgoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            # we will implement json response later
            return Response({'data': serializer.data, 'message': "success"}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UpdateProfileView(UpdateAPIView):
    permission_classes = (IsAuthenticatedUserNgo,
                          IsProceedByNgo, IsAuthenticatedUserNgo)
    serializer_class = ProfileSerializer

    def get_queryset(self):
        ngo_name = self.request.user.username
        ngo = get_object_or_404(Ngo, username=ngo_name)
        return ngo.profile
