from django.urls import path
from .views import RecipeListCreate, RecipeDetail

urlpatterns = [
    path('api/recipes/', RecipeListCreate.as_view(), name='recipe_list_create'),
    path('api/recipes/<int:pk>/', RecipeDetail.as_view(), name='recipe_detail'),
]
