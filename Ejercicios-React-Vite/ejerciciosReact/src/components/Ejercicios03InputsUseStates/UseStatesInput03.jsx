import { useState } from "react"

export const UseStatesInput03 = () =>{

    const [tareas, setTareas] = useState([])
    const [nuevaTarea, setNuevaTarea] = useState([])

    const agregarTarea = () =>{
        setTareas([...tareas, nuevaTarea])
        setNuevaTarea("")
    }

    const eliminarTarea =(indice) =>{
        const nuevasTareas = tareas.filter((_, index) => index !== indice)
        setTareas(nuevasTareas)
    }

    return(
        <div className="">
            <input type="text" 
                value={nuevaTarea}
                onChange={(event) => setNuevaTarea(event.target.value)}/>
            <button onClick={agregarTarea}>Agregar tareas</button>
            <ul>
                {
                    tareas.map((tarea, index) =>(
                        <li key={index}>
                            {tarea} <button onClick={() => eliminarTarea(index)}>
                                Eliminar
                                </button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}