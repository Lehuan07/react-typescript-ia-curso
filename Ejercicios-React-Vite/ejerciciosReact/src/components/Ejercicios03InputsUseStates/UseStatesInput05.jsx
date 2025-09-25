import { useEffect, useState } from "react"

export const UseStatesInput05 = () =>{

    const [texto, setTexto] = useState("")
    const [contador, setContador] = useState(0)
    
    useEffect(()=>{
        setContador(texto.length)
    },[texto])
    

    return(
        <div className="h-screen bg-amber-300 text-black">
            <input type="text" 
                    placeholder="Escribi aca"
                    value={texto}
                    onChange={(event) => setTexto(event.target.value)}
            />
            <button onClick={() => setTexto("")}>Limpiar</button>
            <p>Caracteres restantes: {contador}</p>
        </div>
    )
}