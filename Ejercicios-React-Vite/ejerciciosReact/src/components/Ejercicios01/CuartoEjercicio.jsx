export const CuartoEjercicio = () =>{
    let contador = 0;

    function restarNumero (){
        if(contador >0){
            document.querySelector("#numero").innerHTML = contador
            contador -=1;
        }else{
            alert("El numero tiene que ser mayor que 0")
        }
    }

    function sumarNumer (){
        if(contador >10){
            alert("El numero no puede ser mayor a 10")
        }else{
            document.querySelector("#numero").innerHTML = contador
            contador+=1
        }
    }

    return(
        <div className="h-screen bg-amber-300 text-black">
            <h1 className="" id="numero">{contador}</h1>
            <button onClick={restarNumero}>Restar</button>
            <button onClick={sumarNumer}>Sumar</button>
        </div>
    )
}