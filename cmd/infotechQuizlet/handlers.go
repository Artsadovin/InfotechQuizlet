package main

import (
	"fmt"
	"github.com/jmoiron/sqlx"
	"html/template"
	"log"
	"net/http"
)

type indexPage struct {
}

type loginData struct {
	login    string
	password string
}

func index(dbx *sqlx.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		ts, err := template.ParseFiles("pages/index.html") // Главная страница блога
		if err != nil {
			http.Error(w, "Internal Server Error", 500) // В случае ошибки парсинга - возвращаем 500
			log.Println(err.Error())                    // Используем стандартный логгер для вывода ошбики в консоль
			return                                      // Не забываем завершить выполнение ф-ии
		}

		data := indexPage{}

		err = ts.Execute(w, data) // Заставляем шаблонизатор вывести шаблон в тело ответа
		if err != nil {
			http.Error(w, "Internal Server Error", 500)
			log.Println(err.Error())
			return
		}
	}
}

func logination(dbx *sqlx.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		//if r.Method != "POST" {
		//	http.Redirect(w, r, "/login", http.StatusSeeOther)
		//	return
		//}

		login := r.FormValue("login")
		password := r.FormValue("password")
		fmt.Println(login)
		fmt.Println(password)

		/*data := loginData{
			login:    login,
			password: password,
		} */

		row := dbx.QueryRow("SELECT * FROM user WHERE nickname=? AND password=?", login, password)
		var id int
		var nickname string
		var p string
		var avatar_id int
		err := row.Scan(&id, &nickname, &p, &avatar_id)
		if err != nil {
			log.Fatal(err)
		}
		fmt.Println(nickname)
		fmt.Println(p)
		return
	}
}
