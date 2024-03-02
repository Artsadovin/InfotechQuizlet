import styles from "./FormSignUpContainer.module.css";
import {SignUpFrom} from "../SignUpForm/SignUpFrom";
import {Logo} from "../Logo/Logo";


export const FormSignUpContainer = () =>{
    return (
        <div className={styles.FormContainer}>
            <div className={styles.LogoBar}>
                <Logo/>
            </div>
            <div className={styles.Form}>
                <SignUpFrom/>
            </div>
        </div>
    )
}