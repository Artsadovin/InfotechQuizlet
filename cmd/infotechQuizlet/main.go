package main

import (
	"log"
	"net/http"
)

const (
	port = ":3000"
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/login", index)
	mux.HandleFunc("/singup", index)
	// Реализуем отдачу статики

	mux.Handle("/public/", http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))

	log.Println("Start server " + port)
	err := http.ListenAndServe(port, mux)
	if err != nil {
		log.Fatal(err)
	}
}
