package server

import (
	"github.com/gin-gonic/gin"
	"github.com/googollee/go-socket.io"
	"github.com/zaebee/litclub/backend/config"
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

	Router.Run(":" + port)
}
