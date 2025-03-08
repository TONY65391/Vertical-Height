from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from django.contrib import messages


# Create your views here.

def index(request):
    template = loader.get_template('index.html')
    return HttpResponse(template.render(request = request))

def python(request):
    template = loader.get_template('python.html')
    return HttpResponse(template.render(request = request))