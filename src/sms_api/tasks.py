from .models import SmsInfo
from .celery import app


@app.task
def get_chart_data():
    sent_date_objects = SmsInfo.objects.values('sent_date')
    date_list = []
    for obj in sent_date_objects:
        date_list.append(obj['sent_date'].strftime('%m/%d/%Y'))

    count_list = [(x, date_list.count(x)) for x in set(date_list)]
    temp_list = list(map(list, zip(*count_list)))

    data = {
        'labels': temp_list[0],
        'values': temp_list[1],
    }
    return data
#
# from sms_gateway.celery import app
# from . import models
# from rest_framework.response import Response
#
# @app.task
# def get_chart_data():
#     sent_date_objects = models.SmsInfo.objects.values('sent_date')
#     date_list = []
#     for obj in sent_date_objects:
#         date_list.append(obj['sent_date'].strftime('%m/%d/%Y'))
#
#     count_list = [(x, date_list.count(x)) for x in set(date_list)]
#     temp_list = list(map(list, zip(*count_list)))
#
#     print(temp_list[0])
#     print(temp_list[1])
#     data = {
#         'labels': temp_list[0],
#         'values': temp_list[1],
#     }
#     return data
#
