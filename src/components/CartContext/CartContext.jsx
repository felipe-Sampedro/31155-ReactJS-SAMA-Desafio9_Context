import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')


const CartContext = ({children}) => {
    
    const [carrito, setCarrito] = useState([])

    const AddToCart = (producto) => {

        const repetido = carrito.find((carr)=>carr.id=== Number(producto.id))

        repetido ? carrito.map(p=> p.id===producto.id? p.stock = p.stock + 1 : 0) :setCarrito([...carrito,producto])
    }


    const AddItem = (item,quantity)=>{
      
      const agregado = {item,quantity}

    }




  return (
    <GlobalContext.Provider value= {{carrito,AddToCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext