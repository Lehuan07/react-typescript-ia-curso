import { useState } from "react"

export const UseStates03 = () =>{
    const [mensaje, SetMensaje] = useState("Hacer click")
    const [mostrarMensajeAlternativo, SetMostrarMensajeAlternativo] = useState(true);

    const alternarMensaje = () =>{
        SetMostrarMensajeAlternativo(!mostrarMensajeAlternativo)
        SetMensaje(mostrarMensajeAlternativo ? "Hola" : "Adios")
    }


    return(
        <div className="h-screen bg-amber-300 text-black">
            <button onClick={alternarMensaje}>{mensaje}</button>
        </div>
    )
}