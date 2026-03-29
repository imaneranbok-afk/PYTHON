from django.shortcuts import render, redirect, get_list_or_404 
 
def index(request): 
    return render(request, 'authentication/login.html')
def dashboard(request): 
    return render(request, 'students/student-dashboard.html')
