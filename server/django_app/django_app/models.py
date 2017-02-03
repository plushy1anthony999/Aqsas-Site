from django.db import models

class Catalog(models.Model):
    name = models.CharField(max_length = 255)
    slug = models.SlugField(max_length = 150)
    