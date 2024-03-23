import styles from "./SignUpForm.module.css"
import {useRef, useState} from "react";
import {Link} from "react-router-dom";
import {InvisiblePasswordButton} from "../InvisiblePasswordButton/InvisiblePasswordButton";
import {VisiblePasswordButton} from "../VisiblePasswordButton/VisiblePasswordButton";
import {fetchPostRequest} from "../../utilits/fetchRequests";

export const SignUpFrom = () => {

    const [PasswordShown, setPasswordShown] = useState(false)

    const refLogin = useRef<HTMLInputElement>(null)
    const refPassword = useRef<HTMLInputElement>(null)
    const refConfPassword = useRef<HTMLInputElement>(null)
    const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false)

    return(
        <form className={styles.Form}>
            <h2 className={styles.Title}>Sign Up</h2>
            <input className={styles.SignUpForm} placeholder={"Login"} type={"text"} ref={refLogin}/>
            <div className={styles.PasswordContainer}>
                <input className={styles.PasswordForm} type={PasswordShown ? "text" : "password"} placeholder={"Password"} ref={refPassword}/>

                <div className={styles.ButtonPassword} onClick={() => {
                    setPasswordShown(!PasswordShown);
                }}>
                    {PasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/> }
                </div>
            </div>

            <div className={styles.ConfirmPasswordContainer}>
                <input className={styles.ConfirmPasswordForm} type={ConfirmPasswordShown ? "text" : "password"} placeholder={"Confirm Password"} ref={refConfPassword}/>

                <div className={styles.ConfirmButtonPassword} onClick={() => {
                    setConfirmPasswordShown(!ConfirmPasswordShown);
                }}>
                    {ConfirmPasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/> }
                </div>
            </div>

            <div className={styles.ButtonsBlock}>
                <input className={styles.SignInButton} value={"Sign Up"} type={"submit"} onClick={(event)=>{
                    event.preventDefault()
                    if(refLogin.current! && refPassword.current!){
                        console.log(refLogin.current!.value)
                        console.log(refPassword.current!.value)
                        console.log(refConfPassword.current!.value)
                        fetchPostRequest('api/sign', {login: refLogin.current!.value, password: refPassword.current!.value, confPassword: refConfPassword.current!.value}).then(
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

                <Link to={"/login"}>
                    <button className={styles.LogInButton}>Log In</button>
                </Link>
            </div>
        </form>
    )
}