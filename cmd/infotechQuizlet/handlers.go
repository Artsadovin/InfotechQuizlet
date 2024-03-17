package main

import (
	"encoding/json"
	"fmt"
	"github.com/jmoiron/sqlx"
	"html/template"
	"io"
	"log"
	"net/http"
)

type indexPage struct {
}

type userData struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

type UserIdDb struct {
	UserID int `db:"user_id"`
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
		reqData, err := io.ReadAll(r.Body) // Прочитали тело запроса с reqData в виде массива байт
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}
		/*data := loginData{
			login:    login,
			password: password,
		}

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
		*/
		var req userData

		err = json.Unmarshal(reqData, &req) // Отдали reqData и req на парсинг библиотеке json
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}
		fmt.Println(req.Login, ' ', req.Password)
		user, err := findUserById(dbx, req)
		if err != nil {
			http.Error(w, "Incorrect password or login", 401)
			return
		}
		return
	}
}

func findUserById(db *sqlx.DB, user userData) (UserIdDb, error) {
	const query = `
		SELECT
			user_id
		FROM
		 ` + "`user`" +
		`WHERE
			nickname = ? AND
			password = ?;
	`
	var userD UserIdDb

	// Обязательно нужно передать в параметрах orderID
	err := db.Get(&userD, query, user.Login, user.Password)
	if err != nil {
		return UserIdDb{}, err
	}

	return userD, nil
}
