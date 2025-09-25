import { useState } from "react"

export const UseStatesInput04 = () =>{

    const [contrasenia, setContrasenia] = useState("")
    const [contraseniaValida, setContraseniaValida] = useState(false)

    const validarContrasenia = () =>{
        const longitudValida = contrasenia.length >= 8;
        const contieneMayus = /[A-Z]/.test(contrasenia)
        const contieneNumero = /\d/.test(contrasenia)
        setContraseniaValida(longitudValida && contieneMayus && contieneNumero)
    }


    return(
        <div className="h-screen bg-amber-300 text-black">
            <input type="password" 
            placeholder="Contraseña"
            value={contrasenia}
            onChange={(event) => setContrasenia(event.target.value)}
            />
            <button onClick={validarContrasenia}>
                Validar Contraseña</button>
            <p>{contraseniaValida? "Contraseña valida" : "La contraseña debe tener al menos 8 caracteres, una mayuscula y un numero"}</p>
        </div>
    )
}