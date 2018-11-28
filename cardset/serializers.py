from rest_framework import serializers
from cardset.models import *

class FlashCardSetSerializer(serializers.ModelSerializer):
    class Meta:
        model = FlashCardSet
        fields = ('__all__')

class CardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Card
        fields = ('__all__')