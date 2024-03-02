import styles from "./LogScreen.module.css"
import {TitleContainer} from "../TitleContainer/TitleContainer";
import {FormLogContainer} from "../FormLogContainer/FormLogContainer";

export const LogScreen = () => {
    return (
        <div className={styles.LogScreen}>
            <TitleContainer/>
            <FormLogContainer/>
        </div>
    )
}