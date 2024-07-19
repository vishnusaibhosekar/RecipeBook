from rest_framework import serializers

class RecipeSerializer(serializers.Serializer):
    title = serializers.CharField(max_length=100)
    detailedIngredients = serializers.ListField(
        child=serializers.CharField(max_length=100)
    )
    instructions = serializers.ListField(
        child=serializers.CharField(max_length=500)
    )
    image = serializers.CharField(max_length=500)  # Allow any string for the image field
    prepTime = serializers.CharField(max_length=50)
    cookTime = serializers.CharField(max_length=50)
    totalTime = serializers.CharField(max_length=50)
    servings = serializers.CharField(max_length=50)
    rating = serializers.IntegerField()
