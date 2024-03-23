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

    const refLogin = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)

    return(
        <form className={styles.Form}>
            <h2 className={styles.Title}>Log In</h2>
            <input className={styles.LoginForm} placeholder={"Login"} type={"text"} ref={refLogin}/>
            <div className={styles.PasswordContainer}>
                <input className={styles.PasswordForm} type={PasswordShown ? "text" : "password"} placeholder={"Password"} ref={refPassword}/>

                <div className={styles.ButtonPassword} onClick={() => {
                    setPasswordShown(!PasswordShown);
                }}>
                    {PasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/>}
                </div>
            </div>

            <div className={styles.ButtonsBlock}>
                <input className={styles.LogInButton} value={"Log In"} type={"submit"} onClick={(event) => {

                    event.preventDefault()
                    if(refLogin.current! && refPassword.current!){
                        console.log(refLogin.current!.value)
                        console.log(refPassword.current!.value)
                        fetchPostRequest('api/login', {login: refLogin.current!.value, password: refPassword.current!.value}).then(
                            (response) => {
                                if(!response.ok){
                                    throw new Error('error')
                                }
                                console.log('ura')
                        }
                        ).catch((e)=>{
                            console.log('ошибочка')
                        })

                    }
                }}/>
                <Link to={"/signup"}>
                    <button className={styles.SingUpButton}>Sing up</button>
                </Link>
            </div>
        </form>

    )
}