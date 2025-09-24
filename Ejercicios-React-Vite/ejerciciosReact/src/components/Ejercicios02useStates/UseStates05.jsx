import { useState } from "react"

export const UseStates05 = () =>{
    const [mensaje, SetMentase] = useState("Hacer click")
    const [nuevoMensaje, SetNuevoMensaje] = useState("")

    const funcionMensaje = () =>{
        SetMentase(nuevoMensaje || "Hacer click")
        SetNuevoMensaje("")
    }

    const cambiarMensajeInput = (evento) =>{
        SetNuevoMensaje(evento.target.value)
    }

    return(
        <div className="h-screen bg-amber-300 text-black">
            <input type="text" placeholder="Cambia el nombre del btn"
            value={nuevoMensaje}
            onChange={cambiarMensajeInput}
            />

            <button onClick={funcionMensaje}>
                {mensaje}
            </button>
        </div>
    )
}