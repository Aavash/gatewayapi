from django.shortcuts import render

from .forms import ContactForm


def contact_page(request):

    contact_form = ContactForm(request.POST or None)

    context = {
        "title": "Message Dashboard",
        "page_title": "Send Message",
        "content": "Welcome to the Message Dashboard",
        "form": contact_form
    }
    if request.method == "POST":
        print(request.POST)
    if contact_form.is_valid():
        print(contact_form.cleaned_data)  # Returns cleaned dictionary formatted values and not entire form


    return render(request, "contact/view.html", context)