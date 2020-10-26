# Generated by Django 2.2.13 on 2020-10-22 17:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('SecReport', '0002_report_month'),
    ]

    operations = [
        migrations.AlterField(
            model_name='report',
            name='status',
            field=models.CharField(blank=True, choices=[('0', 'Incomplete'), ('1', 'Complete'), ('2', 'Partially Complete')], default='0', max_length=2, verbose_name='Report Status'),
        ),
    ]
