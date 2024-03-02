import styles from "./SignUpForm.module.css"
import {useState} from "react";
import {Link} from "react-router-dom";
import {InvisiblePasswordButton} from "../InvisiblePasswordButton/InvisiblePasswordButton";
import {VisiblePasswordButton} from "../VisiblePasswordButton/VisiblePasswordButton";

export const SignUpFrom = () => {

    const [PasswordShown, setPasswordShown] = useState(false)

    const [ConfirmPasswordShown, setConfirmPasswordShown] = useState(false)

    return(
        <form className={styles.Form}>
            <h2 className={styles.Title}>Sign Up</h2>
            <input className={styles.SignUpForm} placeholder={"Login"} type={"text"}/>
            <div className={styles.PasswordContainer}>
                <input className={styles.PasswordForm} type={PasswordShown ? "text" : "password"} placeholder={"Password"}/>

                <div className={styles.ButtonPassword} onClick={() => {
                    setPasswordShown(!PasswordShown);
                }}>
                    {PasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/> }
                </div>
            </div>

            <div className={styles.ConfirmPasswordContainer}>
                <input className={styles.ConfirmPasswordForm} type={ConfirmPasswordShown ? "text" : "password"} placeholder={"Confirm Password"}/>

                <div className={styles.ConfirmButtonPassword} onClick={() => {
                    setConfirmPasswordShown(!ConfirmPasswordShown);
                }}>
                    {ConfirmPasswordShown ? <VisiblePasswordButton/> : <InvisiblePasswordButton/> }
                </div>
            </div>

            <div className={styles.ButtonsBlock}>
                <input className={styles.SignInButton} value={"Sign In"} type={"submit"}/>
                <Link to={"/login"}>
                    <button className={styles.LogInButton}>Log In</button>
                </Link>
            </div>
        </form>
    )
}