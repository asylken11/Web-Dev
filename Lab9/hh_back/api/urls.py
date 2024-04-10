# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('companies/', views.list_companies),
    path('companies/<int:id>/', views.get_company),
    path('companies/<int:id>/vacancies/', views.list_company_vacancies),
    path('vacancies/', views.list_vacancies),
    path('vacancies/<int:id>/', views.get_vacancy),
    path('vacancies/top_ten/', views.top_ten_vacancies),
]
