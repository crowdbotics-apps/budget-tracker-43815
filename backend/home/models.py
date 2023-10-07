from django.conf import settings
from django.db import models
class Items(models.Model):
    'Generated Model'
    name = models.CharField(blank=True,max_length=255,)
    price = models.DecimalField(blank=True,max_digits=5,decimal_places=2,)
    created_at = models.DateField(null=True,blank=True,)
