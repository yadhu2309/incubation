# Generated by Django 4.1.3 on 2022-11-21 18:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0002_company_slot'),
    ]

    operations = [
        migrations.AlterField(
            model_name='company',
            name='CompanyName',
            field=models.CharField(max_length=100, unique=True),
        ),
    ]
