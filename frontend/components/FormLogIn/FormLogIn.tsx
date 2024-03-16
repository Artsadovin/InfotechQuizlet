import styles from "./FormLogIn.module.css"

import {HTMLInputTypeAttribute, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {InvisiblePasswordButton} from "../InvisiblePasswordButton/InvisiblePasswordButton";
import {VisiblePasswordButton} from "../VisiblePasswordButton/VisiblePasswordButton";
import {fetchPostRequest} from "../../utilits/fetchRequests";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;



export const FormLogIn = () => {

    const [PasswordShown, setPasswordShown] = useState(false)
<<<<<<< HEAD
=======
    const [Login, setLogin] = useState('')
    const [Password, setPassword] = useState('')

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        alert(Login + ' ' + Password)
    }
>>>>>>> parent of 9d327d5 (123)

    const refLogin = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)
    return(
<<<<<<< HEAD
        <form className={styles.Form}>
            <h2 className={styles.Title}>Log In</h2>
            <input className={styles.LoginForm} placeholder={"Login"} type={"text"} ref={refLogin}/>
            <div className={styles.PasswordContainer}>
                <input className={styles.PasswordForm} type={PasswordShown ? "text" : "password"} placeholder={"Password"} ref={refPassword}/>
=======
        <form className={styles.Form} onSubmit={submitForm}>
            <h2 className={styles.Title}>Log In</h2>
            <input className={styles.LoginForm} placeholder={"Login"} type={"text"} value={Login}
                   onChange={(e) => setLogin(e.target.value)}/>
            <div className={styles.PasswordContainer}>
                <input className={styles.PasswordForm} type={PasswordShown ? "text" : "password"} placeholder={"Password"} value={Password}
                       onChange={(e) => setPassword(e.target.value)}/>
>>>>>>> parent of 9d327d5 (123)

                <div className={styles.ButtonPassword} onClick={() => {
                    setPasswordShown(!PasswordShown);
                }}>
                    {PasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/>}
                </div>
            </div>

            <div className={styles.ButtonsBlock}>
<<<<<<< HEAD
                <input className={styles.LogInButton} value={"Log In"} type={"submit"} onClick={(event) => {

                    event.preventDefault()
                    if(refLogin.current! && refPassword.current!){
                        console.log(refLogin.current!.value)
                        console.log(refPassword.current!.value)
                        fetchPostRequest('api/user', {login: refLogin.current!.value, password: refPassword.current!.value}).then(
                            (response) => {
                                if(!response.ok){
                                    throw new Error('hui')
                                }
                                console.log('ura')
                        }
                        ).catch((e)=>{
                            console.log('ошибочка')
                        })

                    }
                }}/>
=======
                <input className={styles.LogInButton} value={"Log In"} type={"submit"}/>
>>>>>>> parent of 9d327d5 (123)
                <Link to={"/signup"}>
                    <button className={styles.SingUpButton}>Sing up</button>
                </Link>
            </div>
        </form>

    )
}