package controller

import (
	"github.com/labstack/echo/v4"
	"gorm.io/gorm"
	"net/http"
	"time"
)

type (
	Controller struct {
		JwtSecret string
		JwtExp    time.Duration
		DB        *gorm.DB
	}
)

func HTTPSuccess(c echo.Context, d interface{}) error {
	return c.JSON(http.StatusOK, map[string]interface{}{
		"error":   false,
		"data":    d,
	})
}
