# Generated by Django 2.2.1 on 2019-06-28 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='amount_donated',
            field=models.IntegerField(default=0, verbose_name='amount_donated'),
        ),
        migrations.AlterField(
            model_name='user',
            name='mob_no',
            field=models.DecimalField(decimal_places=0, max_digits=10, verbose_name='Mobile_number'),
        ),
    ]
