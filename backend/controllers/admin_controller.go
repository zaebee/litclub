package controllers

import (
	"encoding/json"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/models"
)

func AdminController(r *gin.RouterGroup) {
	admin := r.Group("user")
	{
		admin.POST("/", CreateUser)
		admin.GET("/", GetAllUsers)

	}
}

// CreateUser    godoc
// @Summary      Get single user by ID
// @Description  Takes a user JSON and stores in DB. Returns saved User.
// @Tags         admin
// @Produce      json
// @Param        user body models.User true "User jSON"
// @Success      200  {object}  models.User
// @Router       /admin/user/ [post]
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

// GetAllUsers   godoc
// @Summary      Get users array.
// @Description  Responds with the list of all users as JSON.
// @Tags         admin
// @Produce      json
// @Success      200  {array}  models.User
// @Router       /admin/user/ [get]
func GetAllUsers(c *gin.Context) {
	res, err := json.Marshal(userService.GetAll())
	if err == nil {
		c.JSON(http.StatusOK, string(res))
		return
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error"})
	}
}
