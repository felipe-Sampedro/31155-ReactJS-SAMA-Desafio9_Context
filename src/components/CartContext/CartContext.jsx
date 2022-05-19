import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')


const CartContext = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    const [qtyCompra, setqtyCompra] = useState(0)



    const AddToCart = (producto) => {

        const repetido = carrito.find((carr)=>carr.id=== Number(producto.id))

        repetido ? carrito.map(p=> p.id===producto.id? p.stock = p.stock + 1 : 0) :setCarrito([...carrito,producto])
    }


    const AddItem = (item,quantity)=>{
      const agregado = {item,quantity}
    }


    const removeItem = (id)=>{
      // const remover = carrito.find((carr)=>carr.id !== Number(id))
      const remover = carrito.filter((ref)=>ref.id !== Number(id))

      setCarrito(remover)

    }

    const isInCart = (id) =>{
      return carrito.some(e => e.id===id) ? 'esta en el carrito':'no esta en el carrito'
    }


    const clear = () =>{
      setCarrito([])
    }


  return (
    <GlobalContext.Provider value= {{carrito,setCarrito,qtyCompra,setqtyCompra,AddToCart,removeItem,clear,isInCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext