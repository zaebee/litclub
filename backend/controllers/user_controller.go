package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/services"
)

var userService = services.GetUserServiceInstance()

func UserController(r *gin.RouterGroup) {
	user := r.Group("user")
	{
		user.GET("/:userId", GetUserById)
	}
}

// GetUserById   godoc
// @Summary      Get single user by ID
// @Description  Returns the user whose matched by ID.
// @Tags         users
// @Produce      json
// @Param        ID  path      int true  "get user by ID"
// @Success      200  {array}  models.User
// @Router       /users/{ID} [get]
func GetUserById(c *gin.Context) {
	userId := c.Param("userId")
	if userId != "" {
		res, err := json.Marshal(userService.GetByID(userId))
		if err == nil {
			c.JSON(http.StatusOK, string(res))
			return
		}
	}
	c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
}
