from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ItemsViewSet,ItemsViewSet,ItemsViewSet,ItemsViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('items', ItemsViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
