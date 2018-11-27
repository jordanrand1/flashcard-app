from django.db import models
from django.contrib.postgres.fields import ArrayField, JSONField

class FlashCardSet (models.Model):
    title = models.CharField(max_length=100)

    def __str__(self):  # __unicode__ on Python 2
        return self.title

class Card (models.Model):
    term = models.TextField
    definition = models.TextField
    flashcard_set_id = models.ForiegnKey(FlashCardSet, on_delete=models.CASCADE)

    def __str__(self):
        return "%s %s" % (self.term self.definition)