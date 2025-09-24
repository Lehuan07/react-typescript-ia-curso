import { useState } from "react"

export const UseStates02 = () =>{

    const [cambiarTexto, setCambiarTexto] = useState("Haceme Click")

    const nuevoTexto = () =>{
        setCambiarTexto(cambiarTexto === "Haceme Click" ? "Bien echo!" : "Haceme Click")
    }
    return(
        <div className="h-screen bg-amber-300 text-black">
            <button onClick={nuevoTexto}>{cambiarTexto}</button>
        </div>
    )
}