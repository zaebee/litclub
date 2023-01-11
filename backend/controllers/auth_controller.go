package controllers

import (
	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/middlewares"
)

func AuthController(authMiddleware *middlewares.JwtMiddleware, r *gin.RouterGroup) {
	auth := r.Group("auth")
	{
		// LoginHandler implemented in auth.go -> init() -> Author
		auth.POST("/login", authMiddleware.LoginHandler)
	}
}

/*func LoginUser(c *gin.Context) {
    log.Println("Logging in")
    // handle login
}
*/
