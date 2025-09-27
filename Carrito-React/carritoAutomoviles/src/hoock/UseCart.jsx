import {db} from "../data/db"
import { useState } from "react"

export const UseCart = () =>{
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

    const cartTotal = cart.reduce((total, {quantity, price})=> {return total + (quantity*price)}, 0)

    return{
        data,
        cart,
        addToCart,
        removeFromCart,
        incressQuantity,
        decressQuantity,
        clearCart,
        cartTotal
    }
}