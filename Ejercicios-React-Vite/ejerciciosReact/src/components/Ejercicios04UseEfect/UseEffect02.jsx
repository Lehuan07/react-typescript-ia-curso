import { useEffect, useState } from "react"

export const UseEffect02 = () =>{

    const [usuarios, setUsuarios] =useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data =>{
            setUsuarios(data)
            setCargando(false)
        })
        .catch(error =>{
            console.error("Error fatal", error)
            setCargando(false)
        })
    },[])

    return(
        <div className="h-screen bg-amber-300 text-black">
            <h3>Obtener usuarios desde una api</h3>
            {cargando ? <p>Cargando...</p>:
            <ul>{
                usuarios.map(usuario =>(
                    <li key={usuario.id}>
                        <strong>Nombre: </strong>{usuario.name},<br />
                        <strong>Email: </strong>{usuario.email},<br />
                        <strong>Web: </strong>{usuario.website},<br /><br />
                    </li>
                ))
                }</ul>}
        </div>
    )
}