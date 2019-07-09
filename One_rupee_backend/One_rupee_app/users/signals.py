from django.db.models.signals import post_save
from django.dispatch import receiver
from .models import user, Profile


@receiver(post_save, sender=user, dispatch_uid='save_user_profile')
def save_profile(sender, **kwargs):
    print("called")
    Profile.objects.create(user=user)
