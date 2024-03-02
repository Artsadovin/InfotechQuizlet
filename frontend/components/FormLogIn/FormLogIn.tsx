import styles from "./FormLogIn.module.css"

import React, {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {InvisiblePasswordButton} from "../InvisiblePasswordButton/InvisiblePasswordButton";
import {VisiblePasswordButton} from "../VisiblePasswordButton/VisiblePasswordButton";



export const FormLogIn = () => {

    const [PasswordShown, setPasswordShown] = useState(false)
    const [Login, setLogin] = useState('')
    const [Password, setPassword] = useState('')

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        alert(Login + ' ' + Password)
    }

    return(
        <form className={styles.Form} onSubmit={submitForm}>
            <h2 className={styles.Title}>Log In</h2>
            <input className={styles.LoginForm} placeholder={"Login"} type={"text"} value={Login}
                   onChange={(e) => setLogin(e.target.value)}/>
            <div className={styles.PasswordContainer}>
                <input className={styles.PasswordForm} type={PasswordShown ? "text" : "password"} placeholder={"Password"} value={Password}
                       onChange={(e) => setPassword(e.target.value)}/>

                <div className={styles.ButtonPassword} onClick={() => {
                    setPasswordShown(!PasswordShown);
                }}>
                        {PasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/>}
                </div>
            </div>
            <div className={styles.ButtonsBlock}>
                <input className={styles.LogInButton} value={"Log In"} type={"submit"}/>
                <Link to={"/signup"}>
                    <button className={styles.SingUpButton}>Sing up</button>
                </Link>
            </div>
        </form>

    )
}