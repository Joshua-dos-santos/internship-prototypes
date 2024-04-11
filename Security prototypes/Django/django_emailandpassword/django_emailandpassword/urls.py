from django.contrib import admin
from django.urls import path

from django_emailandpasswordapp.views import LoginView, RegisterView, ProfileView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('login/', LoginView.as_view(), name='login'),
    path('register/', RegisterView.as_view(), name='register'),
    path('accounts/profile/', ProfileView.as_view(), name='profile'),
]
