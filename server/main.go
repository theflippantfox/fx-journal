package main

import (
	"os"

	"github.com/joho/godotenv"
	"github.com/theflippantfox/fx-journal/server"
)

func main() {
	// For importing env variables easily 
    godotenv.Load()

    e := server.InitServer()

	if err := e.Start(":"+os.Getenv("PORT")); err != nil {
		e.Logger.Info(err)
	}
}
