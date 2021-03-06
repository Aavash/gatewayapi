# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2018-05-11 10:23
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='SmsInfo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('phone_no', models.IntegerField()),
                ('message', models.CharField(blank=True, max_length=255)),
                ('sent_date', models.DateTimeField(auto_now_add=True)),
                ('validity', models.BooleanField()),
            ],
        ),
    ]
