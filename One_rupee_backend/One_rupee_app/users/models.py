from django.db import models
from django.contrib.auth.models import User

 class user(User,db.models):
     mob_no = models.IntegerField(max_length = 10)
 
 class Profile(db.models):
     image = models.ImageField()
     user = models.OneToOneField(user,on_delete = model.CASCADE)
     amount_donated = models.IntegerField()
     fb_link = models.URLField()
     
