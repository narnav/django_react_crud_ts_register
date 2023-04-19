from . import views
from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('test', views.index),
    path('register', views.register),
    path('products/<pk>', views.MyModelView.as_view()),
    path('products', views.MyModelView.as_view()),
    path('login/', TokenObtainPairView.as_view()),
]
