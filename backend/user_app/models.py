from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Company(models.Model):
    Name=models.CharField(max_length=100)
    Address=models.CharField(max_length=100)
    State=models.CharField(max_length=100)
    City=models.CharField(max_length=100)
    Email=models.CharField(max_length=100)
    Phone=models.CharField(max_length=100)
    CompanyName=models.CharField(max_length=100,unique=True)
    TeamAndBackground=models.CharField(max_length=100)
    CompanyAndProduct=models.CharField(max_length=100)
    PotentialMarket=models.CharField(max_length=100)
    uid=models.ForeignKey(User,models.CASCADE)
    Pending=models.BooleanField(default=False)
    Approve=models.BooleanField(default=False)
    slot=models.CharField(max_length=100,default=False)
