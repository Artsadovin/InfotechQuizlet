import styles from "./SignUpScreen.module.css"
import {TitleContainer} from "../TitleContainer/TitleContainer.tsx";
import {FormContainer} from "../FormContainer/FormContainer.tsx";


export const SignUpScreen = () => {
    return (
        <div className={styles.SignUpScreen}>
            <TitleContainer/>
            <FormContainer/>
        </div>
    )
}