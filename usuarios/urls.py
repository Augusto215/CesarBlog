from django.shortcuts import render,get_object_or_404,redirect
from .models import *
from .utils import email_html, password_is_valid, Alterar_senha
from django.contrib.messages import constants
from django.contrib import messages
from hashlib import sha256, sha1
from django.conf import settings
import os
from datetime import timedelta, date
from django.utils import timezone
from PIL import Image


def cadastro(request):
    if request.method == "GET":
        return render(request, 'home/login.html')
    elif request.method == "POST":
        nome = request.POST.get('name')
        email = request.POST.get('email')
        usuario = request.POST.get('usuario')
        senha = request.POST.get('senha')
        confirmar_senha = request.POST.get('confirmar_senha')        
        
        print(f'senha`{senha}')
        print(f'confirmar_senha`{confirmar_senha}')

        if not password_is_valid(request, senha, confirmar_senha, nome, usuario, email):
            return redirect('home:home')
        
              
        try:
            senha = sha256(senha.encode()).hexdigest()
            
            user = Usuario.objects.create(nomeUsuario = nome,
                                            userName = usuario,
                                            usuarioEmail = email,
                                            senha=senha,
                                            is_active=False)
            user.save()
                
                
            messages.add_message(request, constants.SUCCESS, 'Usuario cadastrado com sucesso, ative sua conta, link enviado para o seu email!')
            return redirect('home:home')
        except:
            messages.add_message(request, constants.ERROR, 'Erro interno do sistema solicite ajuda ao suporte!')
            return redirect('home:home')
        
        
        
def validar_login(request):
    email = request.POST.get('email')
    senha = request.POST.get('senha')
    senha = sha256(senha.encode()).hexdigest()
    usuario = Usuario.objects.filter(usuarioEmail = email).filter(senha = senha)
    ativado = usuario.filter(is_active = False)
    

    if len(usuario) == 0:
        messages.add_message(request, constants.ERROR, 'Email ou senha invalidos!')
        return redirect('home:home')

    elif len(ativado) > 0:
        messages.add_message(request, constants.SUCCESS, 'Ative sua conta antes de logar!')
        return redirect('home:home')

    
            
    messages.add_message(request, constants.SUCCESS, 'Usuario logado com sucesso!')
    request.session['usuario'] = usuario[0].id
    return redirect('home:home')



def sair(request):
    messages.add_message(request, constants.SUCCESS, 'Você saiu do portal!')
    request.session.flush()
    return redirect('home:home')