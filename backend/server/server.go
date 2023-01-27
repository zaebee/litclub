package server

import (
	"github.com/gin-gonic/gin"
	"github.com/zaebee/litclub/backend/config"

	socketio "github.com/googollee/go-socket.io"
	swaggerFiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
)

var Router *gin.Engine
var SocketServer *socketio.Server

func init() {
	SocketServer = SetupSocketServer()
	Router = SetupRouter()
}

func StartServer() {
	// get config
	cfg := config.GetConfig()
	port := cfg.GetString("PORT")

	Router.GET("/docs/*any", ginSwagger.WrapHandler(swaggerFiles.Handler))
	Router.Run(":" + port)
}
