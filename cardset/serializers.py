from rest_framework import serializers
from todos.models import Todo

class FlashCardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCardSet
        fields = ('__all__')

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('__all__')