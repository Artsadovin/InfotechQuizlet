import React from "react";
import styles from "./TitleContainer.module.css"
import skyes from "./images/skyes.svg"
import city from "./images/city.svg"
export const TitleContainer = () =>{
    return(
        <div className={styles.TitleContainer}>
            <img className={styles.img} src={skyes} alt="картинка"/>
            <h1 className={styles.Header}>WELCOME TO ENGLISH</h1>
            <img className={styles.img} src={city} alt="картинка"/>
        </div>
    )
}