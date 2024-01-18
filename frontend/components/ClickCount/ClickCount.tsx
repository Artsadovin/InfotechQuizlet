import { useEffect, useRef, useState } from "react"


export const ClickCount = () => {
    const [ClickCount, SetCount] = useState(0)
    const ref1 = useRef<HTMLDivElement>(null)
    const [isSelect, setSelect] = useState(false)
    function func(){
        console.log(1)
    }
    useEffect(() => {
        ref1.current!.addEventListener('mousedown', func)
      
        return () =>{
           ref1.current!.removeEventListener('mousedown', func)
        }
    }, [ClickCount])
    return (
        <>
            <div ref = {ref1} onClick={() => {SetCount(ClickCount + 1)}}>Clicked:{ClickCount}</div>
            <button onClick={() => {setSelect(!isSelect)}}>hui : {isSelect ? 'yes' : 'no'}</button>
        </>
    )
}