package server

import (
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/controllers"
	"github.com/zaebee/litclub/backend/middlewares"
)

func SetupRouter() *gin.Engine {
	r := gin.Default() // init router with default mw (e.g. logging)

	// init authMiddleware
	authMiddleware := middlewares.GetAuthMiddleware()
	r.Use(static.Serve("/", static.LocalFile("./frontend/dist", true)))

	public := r.Group("api/public")
	{
		controllers.AuthController(authMiddleware, public)
	}

	secure := r.Group("api/secure")
	{
		secure.Use(authMiddleware.MiddlewareFunc())
		controllers.UserController(secure)
		controllers.SocketController(secure, SocketServer)
	}

	admin := r.Group("api/admin")
	{
		admin.Use(authMiddleware.MiddlewareFunc())
		admin.Use(authMiddleware.AdminMiddleware)
		controllers.AdminController(admin)
	}

	r.NoRoute(func(c *gin.Context) {
		c.Redirect(301, "/")
	})

	return r
}
