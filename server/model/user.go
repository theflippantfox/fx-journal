package model

import "gorm.io/gorm"

type User struct {
    gorm.Model
	Username string `json:"username" xml:"username" form:"username" query:"username"`
	Email    string `json:"email" xml:"email" form:"email" query:"email"`
	Password string `json:"password" xml:"password" form:"password" query:"password"`
}
