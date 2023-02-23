from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import JSONParser
from django.http import HttpResponse, JsonResponse

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView



from .serializers import *


# Create your views here.

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        token['is_superuser'] = user.is_superuser
        token['email'] = user.email
        # ...
       
        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer




@api_view(['GET','POST'])
def signup(request):
    if request.method == 'POST':
        print(request.data)
        serializer = UserSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            print("helo")
            return Response(serializer.data, status=201)
    return Response(serializer.errors, status=400)

@api_view(['GET','POST'])
def companyregister(request):
    if request.method == 'POST':
        print(request.data)
        serializer = CompanySerializers(data=request.data,partial=True)
        
        
        if serializer.is_valid():
            serializer.save()
            print("helocompany")
            return Response(serializer.data, status=201)
        else:
            return Response(serializer.errors,status=400)
    return Response("error", status=400)

@api_view(['GET','POST'])
def companylist(request):
    if request.method == 'GET':
        data = Company.objects.all()
        serializer = CompanySerializers(data,many=True)
        return Response(serializer.data)

@api_view(['GET','PUT'])
def book(request,companyName):
    try:
        company=Company.objects.get(CompanyName=companyName)
    except Company.DoesNotExist:
         return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method =='PUT':
        serializer=CompanySerializers(company,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            data = Company.objects.all()
            serializer = CompanySerializers(data,many=True)
            return Response(serializer.data)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)   
    

@api_view(['DELETE','PUT'])
def change(request,id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = CompanySerializers(company,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            data = Company.objects.all()
            serializer = CompanySerializers(data,many=True)
            return Response(serializer.data)
    if request.method == 'DELETE':
        company.delete()
        data = Company.objects.all()
        serializer = CompanySerializers(data,many=True)
        return Response(serializer.data)
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET','POST'])
def getRoutes(request):
    print('iam in')
    routes = [
        '/api/token',
        '/api/token/refresh'

    ]
    return Response(routes)
