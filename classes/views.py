from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.template import loader
from django.contrib import messages


# Create your views here.

def home(request):
    template = loader.get_template('home.html')
    return HttpResponse(template.render(request = request))

def python(request):
    template = loader.get_template('python.html')
    return HttpResponse(template.render(request = request))

def admission(request):
    print(request)
    template = loader.get_template('admission.html')
    return HttpResponse(template.render(request = request))