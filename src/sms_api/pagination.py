from rest_framework.pagination import LimitOffsetPagination, PageNumberPagination


class SmsInfoLimitOffSetPagination(LimitOffsetPagination):
    default_limit = 5
    max_limit = 10


class SmsInfoPageNumberPagination(PageNumberPagination):
    page_size = 5
