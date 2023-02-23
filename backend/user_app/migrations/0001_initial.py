# Generated by Django 4.1.3 on 2022-11-21 15:01

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Name', models.CharField(max_length=100)),
                ('Address', models.CharField(max_length=100)),
                ('State', models.CharField(max_length=100)),
                ('City', models.CharField(max_length=100)),
                ('Email', models.CharField(max_length=100)),
                ('Phone', models.CharField(max_length=100)),
                ('CompanyName', models.CharField(max_length=100)),
                ('TeamAndBackground', models.CharField(max_length=100)),
                ('CompanyAndProduct', models.CharField(max_length=100)),
                ('PotentialMarket', models.CharField(max_length=100)),
                ('Pending', models.BooleanField(default=False)),
                ('Approve', models.BooleanField(default=False)),
                ('uid', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
