package server

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/theflippantfox/fx-journal/controller"
	"github.com/theflippantfox/fx-journal/initializer"
)

func InitServer() *echo.Echo {
	e := echo.New()
    
    e.Use(middleware.CORS())

	h := &controller.Controller{
		JwtSecret: "adadsa",
		JwtExp:    12312,
		DB:        initializer.InitDatabase(),
	}

	setupRouter(e, h)

	return e
}
