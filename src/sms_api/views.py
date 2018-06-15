from django.http import Http404
from django.shortcuts import render, redirect

from .forms import ContactForm
from .models import SmsInfo


def dashboard(request):
    if not request.user.is_staff or not request.user.is_superuser:
        raise Http404
    return render(request, 'sms_api/dashboard.html', {
    })


def chart(request):
    if not request.user.is_staff or not request.user.is_superuser:
        raise Http404
    return render(request, 'sms_api/chart.html', {
    })


def echart(request):
    if not request.user.is_staff or not request.user.is_superuser:
        raise Http404
    return render(request, 'sms_api/bar-gradient.html', {
    })


def contact_page(request):

    contact_form = ContactForm(request.POST or None)

    context = {
        "title": "Message Dashboard",
        "page_title": "Send Message",
        "content": "Welcome to the Message Dashboard",
        "form": contact_form
    }

    if request.method == "POST":
        SmsInfo.objects.create(phone_no=request.POST.get('phone_number'),
                               message=request.POST.get('content'),
                               sent_date=request.POST.get('time'))
        return redirect('http://localhost:8000/api/sms/')

    return render(request, "contact/view.html", context)
