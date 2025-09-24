import { useState } from "react"

export const QuintoEjercicio = () =>{

    const [contaror, SetContador] = useState(0)

    function restar(){
        SetContador(contaror-1)
    }

    function sumar(){
        SetContador(contaror+1)
    }

    return(
        <div className="">
            <h1>{contaror}</h1>
            <button onClick={sumar} disabled={contaror===10}>Sumar</button>
            <button onClick={restar} disabled={contaror===0}>Restar</button>
        </div>
    )
}