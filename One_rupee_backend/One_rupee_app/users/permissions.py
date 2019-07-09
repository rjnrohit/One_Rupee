from rest_framework.permissions import BasePermission
from django.shortcuts import get_object_or_404
from .models import user


class IsAuthenticatedUser(BasePermission):
    def has_permission(self, request, view):
        user = get_object_or_404(user, username=request.user.username)
        print("verified 2")
        return ngo.IsNgo == False


class IsProceedByUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        user = get_object_or_404(user, username=request.user.username)
        print("verified 3")
        return obj.user == user
