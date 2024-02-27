import styles from "./FormLogIn.module.css"
export const FormLogIn = () => {
    return(
        <form className={styles.Form} action={"/post_request"} method={"POST"}>
            <h2 className={styles.Title}>Log In</h2>
            <input className={styles.LoginForm} placeholder={"Login"} type={"text"} name={"login"}/>
            <input className={styles.PasswordForm} placeholder={"Password"} type={"password"} name={"password"}/>
            <div className={styles.ButtonsBlock}>
                <input className={styles.LogInButton} value={"Log In"} type={"submit"}/>
                <button className={styles.SingUpButton}>Sing up</button>
            </div>
        </form>

    )
}