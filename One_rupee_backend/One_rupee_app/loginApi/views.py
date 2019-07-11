from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .isLogged import IsLoggedIn
from ngo.serializers import NgoSerializer
from users.serializers import UserSerializer
from users.models import user
from ngo.models import Ngo
from django.contrib.auth import authenticate, login, logout, models
from django.views.decorators.csrf import csrf_exempt
from knox.models import AuthToken
# we will implement tokenAuthentication later


class LoginView(APIView):
    permission_classes = ()

    def get(self, request, *args, **kwargs):
        if IsLoggedIn(request):
            query_name = IsLoggedIn(request).username
            print(query_name)
            try:
                logger = Ngo.objects.get(username=query_name)
            except:
                logger = user.objects.get(username=query_name)
            if logger.IsNgo:
                serializer = NgoSerializer(logger)
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)
            else:
                serializer = UserSerializer(logger)
                return Response(serializer.data, status=status.HTTP_206_PARTIAL_CONTENT)

        else:
            return Response({'message': "unauthenticated user"}, status=status.HTTP_401_UNAUTHORIZED)

    # @csrf_exempt
    def post(self, request, *args, **kwargs):
        print("request received")
        if "username" in request.data.keys() and "password" in request.data.keys():
            username = request.data.get("username")
            password = request.data.get("password")
            if username and password:
                auth_user = authenticate(request, username=(
                    username), password=(password))
                if auth_user:
                    if isinstance(request.user, models.AnonymousUser) is False:
                        print("hello")
                        return Response({"message": 'you have already logged in'}, status=status.HTTP_200_OK)
                    else:
                        request.session["username"] = auth_user.username
                        login(request, auth_user)
                        try:
                            logger = Ngo.objects.get(
                                username=auth_user.username)
                        except:
                            logger = user.objects.get(
                                username=auth_user.username)

                        return Response({'message': "login successfull", "IsNgo": logger.IsNgo, "token": AuthToken.objects.create(auth_user)[1]}, status=status.HTTP_200_OK)
                else:
                    return Response({'message:please enter valid credentials'}, status=status.HTTP_400_BAD_REQUEST)

            else:
                return Response({'message': 'please enter valid credentials'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({"error": "it seems that you didn't provided  your username or password"}, status=status.HTTP_400_BAD_REQUEST)


# @csrf_exempt
# @api_view(['GET', 'POST'])
# @permission_classes((IsAuthenticated, ))
# def logout_view(request):
#     print(request.user, request.auth)
#     logout(request)
#     return Response({'message': 'logout successfull'}, status=status.HTTP_204_NO_CONTENT)
