import {useRef, useState} from "react";
import styles from "../FormLogIn/FormLogIn.module.css";
import {Link} from "react-router-dom";

export const InvisiblePasswordButton = () => {
    return(
        <svg width="30" height="24" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.9834 2.82632C21.9834 8.44572 17.5062 13.0012 11.9834 13.0012C6.46051 13.0012 1.9834 8.44572 1.9834 2.82632" stroke="white" stroke-width="2.50098" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
    )
}