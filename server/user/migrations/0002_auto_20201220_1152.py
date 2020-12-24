# Generated by Django 3.1.4 on 2020-12-20 02:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='introduce',
            field=models.TextField(default='', null=True, verbose_name='introduce'),
        ),
        migrations.AlterField(
            model_name='user',
            name='photo',
            field=models.ImageField(default='profile/image/default.png', upload_to='profile/image/', verbose_name='profile image'),
        ),
    ]
