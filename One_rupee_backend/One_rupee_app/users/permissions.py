from rest_framework.permissions import BasePermission
from django.shortcuts import get_object_or_404
from .models import user
from django.contrib.auth.models import AnonymousUser


class IsAuthenticatedUser(BasePermission):
    def has_permission(self, request, view):
        a = get_object_or_404(user, username=request.user.username)
        print("verified 2")
        return a.IsNgo == False


class IsProceedByUser(BasePermission):
    def has_object_permission(self, request, view, obj):
        a = get_object_or_404(user, username=request.user.username)
        print("verified 3")
        return obj.user == a


class IsAnonymous(BasePermission):
    def has_permission(self, request, view):
        return isinstance(request.user, AnonymousUser)
