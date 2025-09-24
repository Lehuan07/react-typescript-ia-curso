import { useState } from "react"

export const UseStates04 = () =>{
    const [mensaje, SetMensaje] = useState("Hacer click")
    const [mostrarMensajeAlternativo, SetMostrarMensajeAlternativo] = useState(true)
    const [colorFondo, setColorFondo] = useState("Green")

    const AlternarMensaje = () =>{
        SetMostrarMensajeAlternativo(!mostrarMensajeAlternativo)
        SetMensaje(mostrarMensajeAlternativo ? "Hola" : "Adios")
        setColorFondo(colorFondo === "Green" ? "Red" : "Green")
    }

    return(
        <div 
            style={{backgroundColor : colorFondo}}
        >
            <button onClick={AlternarMensaje}>{mensaje}</button>
        </div>
    )
}