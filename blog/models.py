from datetime import datetime
from django.db import models
from usuarios.models import Usuario
# Create your models here.


class Posts(models.Model):
    titulo = models.CharField(max_length=50)
    post = models.TextField()
    autor = models.CharField(max_length=50)
    thumb = models.ImageField(upload_to='thumb_cursos',null=False, blank=False)
    thumbUrl = models.URLField(max_length=256, blank=True, null=True )
    data = models.DateTimeField(default = datetime.now)

    def __str__(self) -> str:
        return self.titulo

class Comentarios(models.Model):
    nome = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    Comentario = models.TextField()
    data = models.DateTimeField(default = datetime.now)
    post = models.ForeignKey(Posts, on_delete=models.CASCADE)
    
    def __str__(self) -> str:
        return self.nome