import { useState } from "react"

export const UseStates01 = () =>{

    const [textoBoton, SettextoBoton] = useState("Hacer click")

    const cambiarTexto = () =>{
        SettextoBoton ("Click echo")
    }
    return(
        <div className="h-screen bg-amber-300 text-black">
            <button onClick={cambiarTexto}>{textoBoton}</button>
        </div>
    )
}