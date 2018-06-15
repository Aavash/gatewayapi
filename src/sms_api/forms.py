from django import forms


class ContactForm(forms.Form):
    phone_number = forms.CharField(label='Phone Number', max_length=20,
                                   widget=forms.TextInput(attrs={"class": "form-control",
                                                                 "placeholder": "eg: 9842044452"}))
    content = forms.CharField(label='Your Message', max_length=160,
                              widget=forms.Textarea(attrs={"class": "form-control",
                                                           "placeholder": "Your Message Here..."}))
    time = forms.DateTimeField(label='Enter Message Send Time',
                               widget=forms.DateTimeInput(attrs={"class": "form-control",
                                                                 "placeholder": "eg: 2006-10-25 14:30:59"}))

    def clean_content(self):
        content = self.cleaned_data.get("content")
        if len(content) > 160:
            raise forms.ValidationError("Message should be limited to 160 characters.")
        return content
