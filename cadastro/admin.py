# cadastro\admin.py

from django.contrib import admin
from .models import Pessoa, Contato

admin.site.register(Pessoa)
admin.site.register(Contato)
