from rest_framework import serializers

from . import models


class SmsInfoSerializer(serializers.ModelSerializer):
    phone_no = serializers.IntegerField(label="Phone No")

    class Meta:
        model = models.SmsInfo
        fields = '__all__'
        read_only_fields = ('sent_date', 'validity')

    def validate_phone_no(self, phone_no):
        import re
        if not re.match(r'[9]\d{9}$', str(phone_no)):
            raise serializers.ValidationError("The phone number you entered is not valid")
        return phone_no

    def create(self, validated_data):
        sms_info = models.SmsInfo(
            phone_no=validated_data["phone_no"],
            message=validated_data["message"],
            validity=True
        )
        sms_info.save()
        return sms_info
