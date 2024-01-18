import { useRef } from "react";
import "./Button.css"

type Button = {
    text: string;
    OnClick: () => void;
}

export const Button = (props: Button) => {
    const button = {...props}
    const ref1 = useRef<HTMLButtonElement>(null)
    return(
        <button ref={ref1} className="button" onClick={() => {
            ref1.current!.style.backgroundColor= "black"
            button.OnClick()}}>{button.text}</button>
    )
}