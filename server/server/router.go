package server

import (
	"github.com/labstack/echo/v4"
	"github.com/theflippantfox/fx-journal/controller"
)

func setupRouter(e *echo.Echo, h *controller.Controller) {
	e.POST("/api/users/auth/signup", h.SignUp)
	e.PUT("/api/users/auth/signin", h.SignIn)
    e.PUT("/api/users/auth/signuot", h.SignOut)
}
