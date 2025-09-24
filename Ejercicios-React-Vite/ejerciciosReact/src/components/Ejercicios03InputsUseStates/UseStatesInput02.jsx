import { useState } from "react"


export const UseStatesInput02 = () =>{

    const [numeroUno, setNumeroUno] = useState("");



    return(
        <div>
            <input type="number" 
                    name="" 
                    id="" 
                    placeholder="Numero 1"
            />
            <input type="number" 
                    name="" 
                    id="" 
                    placeholder="Numero 2"
            />

            <button>Resultado</button>

            <p>Resultado: {}</p>
        </div>
    )
}