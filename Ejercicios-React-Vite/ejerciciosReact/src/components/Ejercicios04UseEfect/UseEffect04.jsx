import { useEffect, useState } from "react"
import axios from "axios"

export const UseEffect04 = () =>{
const [usuarios, setUsuario] = useState([])
    const [cargando, setCargando] = useState(true)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            setUsuario(response.data)
            setCargando(false)
        })
        .catch(error =>{
            console.error("Error en: ", error)
        })

    },[])
    return(
        <div className="h-screen bg-amber-300 text-black">
            <h3>Usuarios con una API utilizando Axion</h3>
            {
                cargando ? <p>Cargando...</p>:
                (
                    <ul>
                        {usuarios.map(usuario => (
                            <li key={usuario.id}>
                                <strong>Nombre: </strong>{usuario.name},<br />
                                <strong>Empresa: </strong>{usuario.company.name},<br /><br />
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    )
}