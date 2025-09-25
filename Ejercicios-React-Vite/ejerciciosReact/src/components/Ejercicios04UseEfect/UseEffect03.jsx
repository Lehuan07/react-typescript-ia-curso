import { useEffect, useState } from "react"

export const UseEffect03 = () =>{
    const [usuarios, setUsuario] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const conFetch = async () =>{

            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json()
                setUsuario(data)
                setCargando(false)
            }catch (error){
                console.error("error al obtener datos: ", error)
            }
        }
        conFetch()
    },[])

    return(
        <div className="h-screen bg-amber-300 text-black">
            <h3>Usuarios con una API utilizando Fetch</h3>
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