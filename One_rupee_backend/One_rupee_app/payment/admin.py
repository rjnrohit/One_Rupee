from django.contrib import admin
from .models import Payment, Payment_error, Payment_success
admin.site.register(Payment)
admin.site.register(Payment_error)
admin.site.register(Payment_success)


# Register your models here.
