import { useEffect, useState } from "react"

export const UseEffect01 = () =>{
    const [datos, setDatos] = useState([])
    const [cargando, setCargando] = useState(true)
    
    useEffect(() =>{
        setTimeout(() => {
            const data = ["Avion", "Bicicleta", "Reposera"]
            setDatos(data)
            setCargando(false)
        }, 2000);
    },[])

    return(
        <div className="h-screen bg-amber-300 text-black">
            <h3>Obtener datos de una Appi</h3>
            {
                cargando ? <p>Cargando...</p> : 
                <ul>{
                    datos.map((dato, index) =><li key={index}>{dato}</li>)
                    }</ul>
            }
        </div>
    )
}