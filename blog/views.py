from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request, 'blog/cesar.html')


def artigos(request):
    return render(request, 'blog/artigos.html')


def artisgosAcademicos(request):
    return render(request, 'blog/artisgosAcademicos.html')


def contato(request):
    return render(request, 'blog/contato.html')


def sobremim(request):
    return render(request, 'blog/sobremim.html')