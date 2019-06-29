# Generated by Django 2.2.1 on 2019-06-29 07:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20190628_1420'),
        ('ngo', '0002_auto_20190628_1420'),
    ]

    operations = [
        migrations.CreateModel(
            name='Payment',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('transaction_id', models.DecimalField(decimal_places=0, max_digits=100, verbose_name='transaction_id')),
                ('transaction_time', models.DateTimeField(auto_now_add=True, verbose_name='transaction_time')),
                ('payment_status', models.BooleanField(default=False, verbose_name='payment_status')),
                ('amount_transacted', models.IntegerField(default=1, verbose_name='amount_funded')),
                ('ngo', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='ngo.Ngo', verbose_name='to_ngo')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.user', verbose_name='through_user')),
            ],
            options={
                'verbose_name': 'Payment',
                'verbose_name_plural': 'Payments',
            },
        ),
        migrations.AddField(
            model_name='ngo',
            name='users',
            field=models.ManyToManyField(through='ngo.Payment', to='users.user', verbose_name='users_to_ngo_through_payment'),
        ),
    ]