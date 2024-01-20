import styles from "./LogScreen.module.css"
import {TitleContainer} from "../TitleContainer/TitleContainer.tsx";
import {FormContainer} from "../FormContainer/FormContainer.tsx";

export const LogScreen = () => {
    return (
        <div className={styles.LogScreen}>
            <TitleContainer/>
            <FormContainer/>
        </div>
    )
}