from django.conf import settings
from django.contrib.auth.decorators import login_required
from django.template.response import TemplateResponse
from openai import OpenAI

from .forms import ImagePromptForm


@login_required
def home(request):
    return TemplateResponse(
        request,
        "openai_example/openai_home.html",
        {
            "active_tab": "openai",
        },
    )


@login_required
def image_demo(request):
    client = OpenAI(api_key=settings.OPENAI_API_KEY)
    image_urls = []
    if request.method == "POST":
        form = ImagePromptForm(request.POST)
        if form.is_valid():
            prompt = form.cleaned_data["prompt"]
            openai_response = client.images.generate(prompt=prompt, n=6, size="256x256")
            image_urls = [data.url for data in openai_response.data]
    else:
        form = ImagePromptForm()
    return TemplateResponse(
        request,
        "openai_example/image_home.html",
        {
            "active_tab": "openai",
            "form": form,
            "image_urls": image_urls,
        },
    )
