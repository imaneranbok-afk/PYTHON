from django.shortcuts import render, redirect 
from django.http import HttpResponse 
from .models import Student, Parent 
 
def student_list(request): 
    return render(request, 'students/students.html') 
 
def add_student(request): 
    return render(request, 'students/add-student.html') 
 
def edit_student(request, student_id): 
    return render(request, 'students/edit-student.html') 
 
def view_student(request, student_id): 
    return render(request, 'students/student-details.html') 
 
def delete_student(request, student_id): 
    return redirect('student_list')