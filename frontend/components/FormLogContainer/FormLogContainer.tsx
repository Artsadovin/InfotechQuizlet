import logo from "./images/logo.svg"
import styles from "./FormLogContainer.module.css"
import {FormLogIn} from "../FormLogIn/FormLogIn";
import {Logo} from "../Logo/Logo";
export const FormLogContainer = () => {
    return (
        <div className={styles.FormContainer}>
            <div className={styles.LogoBar}>
                <Logo/>
            </div>
            <div className={styles.Form}>
                <FormLogIn/>
            </div>
        </div>
    )
}