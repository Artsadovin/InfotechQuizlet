import styles from "./Form.module.css"


export const Form = () => {
    return(
        <>


            <form className={styles.Form}>
                <p className={styles.Title}>Log In</p>
                <input className={styles.LoginForm} placeholder={"Login"} type={"text"}/>
                <input className={styles.PasswordForm} placeholder={"Password"} type={"password"}/>
                <div className={styles.ButtonsBlock}>
                    <button className={styles.LogInButton}>Log in</button>
                    <button className={styles.SingUpButton}>Sing up</button>
                </div>


            </form>
        </>
    )
}