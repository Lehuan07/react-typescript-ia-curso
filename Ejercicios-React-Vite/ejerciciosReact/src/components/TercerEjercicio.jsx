export const TercerEjercicio = () =>{
    let contador = 0;

    function sumarNumero (){
        contador+= 1
        /*console.log(contador)*/
        document.getElementById("contador").innerHTML=contador
    }
    return(
        <div className="h-screen bg-amber-300 text-black">
            <h1 id="contador">{contador}</h1>
            <button onClick={sumarNumero}>Sumar Numero</button>
        </div>
    )
}