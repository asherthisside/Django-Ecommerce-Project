from django.contrib import admin
from .models import *

# Register your models here.
admin.site.register([Customer, Product, Order, Orderitem, ShippingAddress])