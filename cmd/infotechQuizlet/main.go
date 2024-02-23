package main

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"github.com/gorilla/mux"
	"github.com/jmoiron/sqlx"
	_ "github.com/jmoiron/sqlx"
	"log"
	"net/http"
)

const (
	port         = ":3000"
	dbDriverName = "mysql"
)

func main() {

	db, err := OpenDB()
	if err != nil {
		log.Fatal(err)
	}

	dbx := sqlx.NewDb(db, dbDriverName)

	mux := mux.NewRouter()

	mux.HandleFunc("/home", index(dbx))

	mux.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))
	log.Println("Start server " + port)
	err = http.ListenAndServe(port, mux)
	if err != nil {
		log.Fatal(err)
	}
}

func OpenDB() (*sql.DB, error) {
	return sql.Open(dbDriverName, "root:Sadovin512(localhost:3306)/Quizlet?charset=utf8mb4&collation=utf8mb4_unicode_ci&parseTime=true")
}
