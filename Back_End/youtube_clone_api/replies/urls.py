from django.urls import path
from . import views

urlpatterns = [
    path('replies/', views.CommentList.as_view()),
    path('replies/<int:pk>/', views.CommentList.as_view())
]
