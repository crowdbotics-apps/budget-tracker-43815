from django.conf import settings
from django.db import models
class Items(models.Model):
    'Generated Model'
    name = models.CharField(max_length=255,blank=True,)
    price = models.DecimalField(max_digits=5,decimal_places=2,blank=True,)
    created_at = models.DateTimeField(auto_now_add=True,blank=True,)
