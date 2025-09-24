import { useState } from "react"

export const UseStatesInput01 = () =>{

    const [texto, setTexto] = useState("")
    const limite = 10;

    const actualizarTexto = (evento) =>{
        const nuevoTexto = evento.target.value
        setTexto(nuevoTexto)
    }

    const caracteresRestantes = limite-texto.length

    return(
        <div className="h-screen bg-amber-300 text-black">
            <input type="text" 
                    placeholder="Escribi aca"
                    value={texto}
                    onChange={actualizarTexto}
                    maxLength={limite}
            />
            <p>Caracteres restantes: {caracteresRestantes}</p>
        </div>
    )
}