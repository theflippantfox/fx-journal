package controller

import (
	"github.com/labstack/echo/v4"
	"github.com/theflippantfox/fx-journal/model"
)

func (h *Controller) SignUp(c echo.Context) (err error) {
	u := new(model.User)

	if err := c.Bind(u); err != nil {
		return err
	}

	user := &model.User{
		Username: u.Username,
		Email:    u.Email,
		Password: u.Password,
	}
	
    if err := h.DB.Create(&user).Error; err != nil {
	    return err
	}

	return HTTPSuccess(c, user)
}

func (h *Controller) SignIn(c echo.Context) (err error) {
    u := new(model.User)

    if err := c.Bind(u); err != nil {
        return err
    }

    user := &model.User{
        Username: u.Username,
        Password: u.Password,
    }

    if err := h.DB.First(&user).Error; err != nil {
        return err
    }

	return HTTPSuccess(c, user)
}

func (h *Controller) SignOut(c echo.Context) (err error) {
	return HTTPSuccess(c, "bye")
}
