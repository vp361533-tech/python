from django.shortcuts import render

def index(request):
    contexto = {
        'nome': 'Joca',
        'idade': 30,
    }
    return render(request, 'cadastro/index.html', contexto)

def contato(request):
    return render(request, 'cadastro/contato.html') 

def index(request):
    contexto = {
        'nome': 'André',
        'idade': 30,
        'frutas': ['Maçã', 'Banana', 'Laranja', 'Uva'],
    }
    return render(request, 'cadastro/index.html', contexto)