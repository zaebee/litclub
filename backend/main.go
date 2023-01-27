package main

import (
	_ "github.com/zaebee/litclub/backend/docs"
	"github.com/zaebee/litclub/backend/server"
)

// @title LitClub API
// @BasePath  /api
func main() {
	server.StartServer()
}
