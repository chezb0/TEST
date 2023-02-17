from django.contrib import admin
from django.urls import re_path
from django.conf import settings
from serverApp import views

urlpatterns = [
    re_path(r'^on_filter', views.onFilter),
]