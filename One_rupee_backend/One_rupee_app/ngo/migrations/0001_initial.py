# Generated by Django 2.2.1 on 2019-06-25 20:14

from django.conf import settings
import django.contrib.auth.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0011_update_proxy_permissions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ngo',
            fields=[
                ('user_ptr', models.OneToOneField(auto_created=True, on_delete=django.db.models.deletion.CASCADE, parent_link=True, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL)),
                ('Ngo_certificate', models.URLField(default='https://www.google.com')),
                ('short_description', models.TextField(max_length=1000)),
                ('Ngo_website', models.URLField(default='https://www.google.com')),
            ],
            options={
                'verbose_name': 'Ngo',
                'verbose_name_plural': 'Ngos',
            },
            bases=('auth.user', models.Model),
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(default='www.google.com', upload_to=None)),
                ('amount_collected', models.IntegerField()),
                ('long_description', models.TextField()),
                ('location', models.TextField()),
                ('goal', models.TextField(max_length=1000)),
                ('contact', models.IntegerField(max_length=10)),
                ('Ngo', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='ngo.Ngo')),
            ],
            options={
                'verbose_name': 'Profile',
                'verbose_name_plural': 'Profiles',
            },
        ),
    ]
