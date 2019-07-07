from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .isLogged import IsLoggedIn
from ngo.serializers import NgoSerializer
from users.serializers import UserSerializer
from users.models import user
from ngo.models import Ngo
from django.contrib.auth import authenticate, login, logout

# we will implement tokenAuthentication later


class LoginView(APIView):
    def get(request, *args, **kwargs):
        if IsLoggedIn(request):
            query_name = IsLoggedIn(request).username
            try:
                logger = Ngo.objects.get(username=query_name)
            except:
                logger = user.objects.get(username=query_name)
            if logger.isNgo:
                serializer = NgoSerializer(logger)
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
            else:
                serializer = UserSerializer(logger)
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)

        else:
            return Response({'message': "unauthenticated user"}, status=status.HTTP_401_UNAUTHORISED)

    def post(request, *args, **kwargs):
        username = request.data.get("username")
        password = request.data.get("password")
        if username and password:
            auth_user = authenticate(
                request, username=username, password=password)
            if auth_user:
                if IsLoggedIn(auth_user):
                    return Response({"message": 'you have already logged in'}, status=status.HTTP_100_CONTINUE)
                else:
                    request.session["username"] = auth_user.username
                    login(request, auth_user)
                    return Response({'message': "login successfull"}, status=status.HTTP_200_OK)
            else:
                return Response({'message:please enter valid credentials'}, status=status.HTTP_400_BAD_REQUEST)

        else:
            return Response({'message': 'please enter valid credentials'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'POST'])
def logout_view(request):
    logout(request)
    return Response({'message': 'logout successfully'}, status=status.HTTP_204_NO_CONTENT)