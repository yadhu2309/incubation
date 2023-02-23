from django.urls import path,include
from . import views
from .views import MyTokenObtainPairView
from rest_framework import routers
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
     path('',views.getRoutes),
     path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('signup/',views.signup,name='signup'),
     path('company/',views.companyregister,name='company'),
     path('companylist/',views.companylist,name='companylist'),
     path('change/<id>',views.change,name='change'),
      path('book/<str:companyName>',views.book,name='book'),
]