from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.decorators import parser_classes

from .models import FlashCardSet, Card
from .serializers import FlashCardSetSerializer, CardSerializer

import pdb
import json

@api_view(['GET', 'DELETE'])
@parser_classes((JSONParser,))
def flash_card_set_list(request, pk, format=None):
    try:
        print({request})
        flashCardSet = FlashCardSet.objects.get(pk)
    except FlashCardSet.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)


    if request.method == 'GET':
        flashCardSet = FlashCardSet.objects.get(pk)
        serializer = TodoSerializer(todos, context={'request': request}, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        flashCardSet.delete()
        return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
@parser_classes((JSONParser,))
def flash_card_set_post(request, format=None):
    if request.method == 'POST':
        data = request.data['title']
        flashCardSetSerializer = FlashCardSetSerializer(data=request.data)
        if flashCardSetSerializer.is_valid():
            flashCardSetSerializer.save()
            newSet = FlashCardSet.objects.order_by('-id')[0]
            cards = request.data['cards']
            for card in cards:
                cardSerializer = CardSerializer(data=card)
                card['flashcard_set'] = newSet.id
                if cardSerializer.is_valid():
                    cardSerializer.save()
            return Response(flashCardSetSerializer.data, status=status.HTTP_201_CREATED)     
        return Response(flashCardSetSerializer.errors, status=status.HTTP_400_BAD_REQUEST)
             