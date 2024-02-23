import styles from "./FormLogIn.module.css"


export const FormLogIn = () => {
    return(
        <form className={styles.Form}>
            <h2 className={styles.Title}>Log In</h2>
            <input className={styles.LoginForm} placeholder={"Login"} type={"text"}/>
            <input className={styles.PasswordForm} placeholder={"Password"} type={"password"}/>
            <div className={styles.ButtonsBlock}>
                <input className={styles.LogInButton} value={"Log In"} type={"submit"}/>
                <button className={styles.SingUpButton}>Sing up</button>
            </div>
        </form>

    )
}