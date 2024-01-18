import { useState } from "react";

export const Menu = () => {
    const [isOpened, setSelect] = useState(false)
    return (<div>
        <button onClick = {()=> {setSelect(!isOpened)}}>ff</button>
        {
            isOpened &&
            <div>
                <button> csd</button>
                <button> csd</button>
                <button> csd</button>
            </div>
        }
        
    </div>)
}