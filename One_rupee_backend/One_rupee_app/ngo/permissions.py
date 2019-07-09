from rest_framework.permissions import BasePermission
from django.shortcuts import get_object_or_404
from .models import Ngo


class IsAuthenticatedUserNgo(BasePermission):
    def has_permission(self, request, view):
        ngo = get_object_or_404(Ngo, username=request.user.username)
        print("verified 2")
        return ngo.IsNgo


class IsProceedByNgo(BasePermission):
    def has_object_permission(self, request, view, obj):
        ngo = get_object_or_404(Ngo, username=request.user.username)
        print("verified 3")
        return obj.ngo == ngo
