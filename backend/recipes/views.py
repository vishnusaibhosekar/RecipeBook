import json
import os
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import RecipeSerializer

# Define the path to the JSON file
JSON_FILE_PATH = os.path.join(os.path.dirname(__file__), 'data', 'recipes.json')

def read_json():
    with open(JSON_FILE_PATH, 'r') as file:
        return json.load(file)

def write_json(data):
    with open(JSON_FILE_PATH, 'w') as file:
        json.dump(data, file, indent=4)

class RecipeListCreate(APIView):
    def get(self, request):
        data = read_json()
        return Response(data)

    def post(self, request):
        data = read_json()
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            new_recipe = serializer.validated_data
            new_recipe = {'id': max(recipe['id'] for recipe in data) + 1 if data else 1, **new_recipe}
            data.append(new_recipe)
            write_json(data)
            return Response(new_recipe, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class RecipeDetail(APIView):
    def get_object(self, pk):
        data = read_json()
        for recipe in data:
            if recipe['id'] == pk:
                return recipe
        return None

    def get(self, request, pk):
        recipe = self.get_object(pk)
        if recipe:
            return Response(recipe)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        data = read_json()
        recipe = self.get_object(pk)
        if recipe:
            serializer = RecipeSerializer(recipe, data=request.data)
            if serializer.is_valid():
                updated_recipe = serializer.validated_data
                updated_recipe['id'] = pk
                index = next((index for (index, d) in enumerate(data) if d["id"] == pk), None)
                data[index] = updated_recipe
                write_json(data)
                return Response(updated_recipe)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        data = read_json()
        recipe = self.get_object(pk)
        if recipe:
            data = [r for r in data if r['id'] != pk]
            write_json(data)
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(status=status.HTTP_404_NOT_FOUND)
