# Generated by Django 4.1.2 on 2023-06-07 15:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0004_alter_post_subtitulo'),
    ]

    operations = [
        migrations.AlterField(
            model_name='post',
            name='data',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='post',
            name='post',
            field=models.TextField(max_length=100000),
        ),
    ]