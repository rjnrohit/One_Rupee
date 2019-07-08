from django.contrib.auth.models import User
from django.shortcuts import get_object_or_404


def IsLoggedIn(request):
    print(request.session)
    username = request.session.has_key("username")
    if username:
        current_user = get_object_or_404(
            User, username=request.session["username"])
        print("done from here")
        return current_user
    else:
        return None
