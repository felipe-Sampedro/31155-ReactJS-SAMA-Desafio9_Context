import React, { useContext } from 'react'
import { GlobalContext } from '../CartContext/CartContext'


const Cart = () => {

  const {carrito} = useContext(GlobalContext)

  return (
    <>
      {carrito.length > 0 ? carrito.map((item,index)=>(
        <div key={index}>{item.title} {item.stock}</div>

      )): <h1>Carrito esta vacio</h1>

      }
    </>
  )
}

export default Cart