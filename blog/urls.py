from django.contrib import admin
from django.urls import path, include
from .views import *


app_name = 'blog'

urlpatterns = [
    path('', home, name='home'),
    path('sobremim/', sobremim, name='sobremim'),
    path('contato/', contato, name='contato'),
    path('artisgosAcademicos/', artisgosAcademicos, name='artisgosAcademicos_default'),
    path('artisgosAcademicos/page/<int:page>/', artisgosAcademicos, name='artisgosAcademicos'),
    path('artigos/', artigos, name='artigo_default'),
    path('artigos/page/<int:page>/', artigos, name='artigo'),
    
]