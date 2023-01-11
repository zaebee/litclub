package controllers

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/models"
	"net/http"
)

func AdminController(r *gin.RouterGroup) {
	admin := r.Group("user")
	{
		admin.POST("/", CreateUser)
		admin.GET("/", GetAllUsers)

	}
}

func CreateUser(c *gin.Context) {
	user := models.User{}
	if err := c.ShouldBind(&user); err == nil {
		user.Role = models.User_ROLE_USER
		res, err := json.Marshal(userService.Create(&user))
		if err == nil {
			c.JSON(http.StatusOK, string(res))
		} else {
			c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		}
	}
}

func GetAllUsers(c *gin.Context) {
	res, err := json.Marshal(userService.GetAll())
	if err == nil {
		c.JSON(http.StatusOK, string(res))
		return
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
	}
}
