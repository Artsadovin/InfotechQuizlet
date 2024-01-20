import logo from "./images/logo.svg"
import styles from "./FormContainer.module.css"
import {Form} from "../Form/Form.tsx";
export const FormContainer = () => {
    return (
        <div className={styles.FormContainer}>
            <div className={styles.LogoBar}>
                <img className={styles.logo} src={logo} alt={"картинка"}/>
            </div>
            <div className={styles.Form}>
                <Form/>
            </div>
        </div>
    )
}