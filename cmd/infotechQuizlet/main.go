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

	err = db.Ping()
	if err != nil {
		log.Fatal(err)
	}

	dbx := sqlx.NewDb(db, dbDriverName)
	/*
		row := db.QueryRow("SELECT * FROM user WHERE nickname=?", "oneeyeking")
		var id int
		var nickname string
		var password string
		var avatar_id int
		err = row.Scan(&id, &nickname, &password, &avatar_id)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(nickname)
	*/

	mux := mux.NewRouter()

	mux.HandleFunc("/login", index(dbx)).Methods(http.MethodPost)
	mux.HandleFunc("/post_request", logination(dbx))

	mux.PathPrefix("/public/").Handler(http.StripPrefix("/public/", http.FileServer(http.Dir("./public"))))
	log.Println("Start server " + port)
	err = http.ListenAndServe(port, mux)
	if err != nil {
		log.Fatal(err)
	}
}

func OpenDB() (*sql.DB, error) {
	return sql.Open(dbDriverName, "root:Sadovin512@tcp(localhost:3306)/infotech_quizlet?charset=utf8mb4&collation=utf8mb4_unicode_ci&parseTime=true")
}
