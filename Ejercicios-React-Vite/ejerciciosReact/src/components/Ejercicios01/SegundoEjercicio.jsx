

export const SegundoEjercicio = () =>{

    function enviarMensaje () {
        alert("Seré un crack en la programacion!")
    }

    return(
        <div className="h-screen bg-amber-300 text-black">
            <button onClick={enviarMensaje}>
                Enviar Mensaje
            </button>
        </div>
    )
}