import styles from "./SignUpScreen.module.css"
// @ts-ignore
import {TitleContainer} from "../TitleContainer/TitleContainer";
// @ts-ignore
import {FormSignUpContainer} from "../FormSignUpContainer/FormSignUpContainer";


export const SignUpScreen = () => {
    return (
        <div className={styles.SignUpScreen}>
            <TitleContainer/>
            <FormSignUpContainer/>
        </div>
    )
}