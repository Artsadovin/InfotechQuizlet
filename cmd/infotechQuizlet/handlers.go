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

type userLoginData struct {
	Login    string `json:"login"`
	Password string `json:"password"`
}

type userRegistrationData struct {
	Login         string `json:"login"`
	Password      string `json:"password"`
	PasswordCheck string `json:"password_check"`
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
		var req userLoginData

		err = json.Unmarshal(reqData, &req)
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

func registration(dbx *sqlx.DB) func(w http.ResponseWriter, r *http.Request) {
	return func(w http.ResponseWriter, r *http.Request) {
		reqData, err := io.ReadAll(r.Body) // Прочитали тело запроса с reqData в виде массива байт
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}
		var req userRegistrationData

		err = json.Unmarshal(reqData, &req)
		if err != nil {
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			log.Println(err)
			return
		}
		if req.Password != req.PasswordCheck {
			http.Error(w, "Passwords don't match", 401)
			log.Println(err)
			return
		}
		fmt.Println(req.Login, ' ', req.Password)
		user, err := createNewUser(dbx, req)
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

func createNewUser(db *sqlx.DB, user userData) (UserIdDb, error) {
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
