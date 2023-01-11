package controllers

import (
	"encoding/json"
	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/services"
	"net/http"
)

var userService = services.GetUserServiceInstance()

func UserController(r *gin.RouterGroup) {
	user := r.Group("user")
	{
		user.GET("/:userId", GetUserById)
	}
}

func GetUserById(c *gin.Context) {
	userId := c.Param("userId")
	if userId != "" {
		res, err := json.Marshal(userService.GetById(userId))
		if err == nil {
			c.JSON(http.StatusOK, string(res))
			return
		}
	}
	c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
}
