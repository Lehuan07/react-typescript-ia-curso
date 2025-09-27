import { useState } from "react"
import { Automovil } from "./components/Automovil"
import { Header } from "./components/Header"
import {db} from "./data/db"

function App() {

  const data = db

  const [cart, setCart] = useState([]);

  function addToCart (item){
    
    const itemExist = cart.findIndex( automovil => automovil.id === item.id)

    if(itemExist>=0){
      const updateCart = [...cart]
      updateCart[itemExist].quantity++
      setCart(updateCart)
    }else{
      item.quantity = 1
      setCart([...cart, item])
    }
  }

  function removeFromCart(idRemove){
    setCart(prevCart => prevCart.filter(automovil => automovil.id !== idRemove))
  }

  function decressQuantity(id){
    const updatedCart = cart.map(item =>{
      if(item.id === id && item.quantity > 1){
        return{
          ...item,
          quantity: item.quantity -1
        
      }
    }
    return item
    })
    setCart(updatedCart)
  }

  function incressQuantity(id){
    const incressCart = cart.map(item =>{
      if(item.id === id && item.quantity >= 1){
        return{
          ...item,
          quantity:item.quantity + 1
        }
      }
      return item
    })
    setCart(incressCart)
  }

  function clearCart(){
    setCart([])
  }

  return (
    <>
      
    <Header
    cart = {cart}
    removeFromCart = {removeFromCart}
    decressQuantity={decressQuantity}
    incressQuantity={incressQuantity}
    clearCart={clearCart}
    />

    <main className="container-xl mt-5">
      <h2 className="text-center">Automóviles disponibles</h2>
      <div className="row mt-5">
        {data.map((automovil)=>(
      <Automovil 
        key={automovil.id}
        automovil={automovil}
        setCart = {setCart}
        addToCart={addToCart}
        
      />
      ))}
      </div>
    </main>

    <footer className="mt-5 py-5">
      <div className="container-xl">
        <p className="text-center fs-6 mt-4 m-md-0 text-muted">© 2024 Super Carros, Inc</p>
      </div>
    </footer>
    </>
  )
}

export default App
