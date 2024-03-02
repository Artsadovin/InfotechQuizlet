package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
)

const (
	port = ":3000"
)

func main() {
	mux := mux.NewRouter()

	mux.HandleFunc("/login", index)
	mux.HandleFunc("/signup", index)
	mux.HandleFunc("/main", index)
	// Реализуем отдачу статики

	mux.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))

	log.Println("Start server " + port)
	err := http.ListenAndServe(port, mux)
	if err != nil {
		log.Fatal(err)
	}
}
