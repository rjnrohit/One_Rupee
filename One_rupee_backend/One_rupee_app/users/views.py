from django.shortcuts import render, redirect
from django.urls import reverse
from django.views.decorators.csrf import csrf_exempt


def register(request):
    pass


@csrf_exempt
def landingPage(request):
    return redirect('http://localhost:3001/')
