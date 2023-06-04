from django.shortcuts import render
from usuarios.models import *
from django.core.paginator import Paginator
from .models import *

# Create your views here.
def home(request):
    post = Post.objects.all()
    redes_sociais = Contato.objects.all()
    
    context = {
    'post':post,
    'redes_sociais':redes_sociais
    }

    return render(request, 'blog/cesar.html', context)


def artigos(request, page=1):
    redes_sociais = Contato.objects.all()
    artigos = Materias.objects.all()
    paginator = Paginator(artigos, 6)
    page_obj = paginator.get_page(page)
    
    context = {
        ''
        'page_obj':page_obj,
        'redes_sociais':redes_sociais
    }
    
    return render(request, 'blog/artigos.html', context)


def artisgosAcademicos(request, page=1):
    redes_sociais = Contato.objects.all()
    artigos = ArtigoAcademiaco.objects.all()
    paginator = Paginator(artigos, 6)
    page_obj = paginator.get_page(page)
    
    context = {
        'page_obj':page_obj,
        'redes_sociais':redes_sociais
    }
    
    return render(request, 'blog/artisgosAcademicos.html', context)



def contato(request):
    return render(request, 'blog/contato.html')


def sobremim(request):
    sobre_mim = SobreMim.objects.all()
    redes_sociais = Contato.objects.all()
    
    context = {
        'sobre_mim':sobre_mim,
        'redes_sociais':redes_sociais
    }
    
    return render(request, 'blog/sobremim.html', context)