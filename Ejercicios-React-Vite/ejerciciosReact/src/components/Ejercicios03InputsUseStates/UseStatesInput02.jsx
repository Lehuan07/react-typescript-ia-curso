import { useState } from "react"


export const UseStatesInput02 = () =>{

    const [numeroUno, setNumeroUno] = useState("");
    const [numeroDos, setNumeroDos] = useState("");
    const [Resultado, setResultado] = useState("");

    const sumarNumeros = () =>{
        const suma = parseInt(numeroUno)+parseInt(numeroDos);
        setResultado(suma)
    }

    return(
        <div>
            <input type="number" 
                    name="" 
                    id="" 
                    placeholder="Numero 1"
                    value={numeroUno}
                    onChange={(event) =>setNumeroUno(event.target.value)}
            />
            <input type="number" 
                    name="" 
                    id="" 
                    placeholder="Numero 2"
                    value={numeroDos}
                    onChange={(event) =>setNumeroDos(event.target.value)}
            />

            <button
                    onClick={sumarNumeros}>
                        Resultado
            </button>

            <p>Resultado: {Resultado}</p>
        </div>
    )
}