from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Company
class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id','username','email','password','is_superuser','first_name','last_name')
        extra_kwargs = {'password':{'write_only':True,'required':True}}
    def create(self, validated_data):
        password = validated_data.pop('password',None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance


class CompanySerializers(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'