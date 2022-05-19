import React, { createContext, useState } from 'react'


export const GlobalContext = createContext('')


const CartContext = ({children}) => {
    
    const [carrito, setCarrito] = useState([])
    const [qtyCompra, setqtyCompra] = useState(0)
    const [acum, setAcum] = useState(0)
    const [valorCompra, setValorCompra] = useState(0)


    const AddToCart = (producto,cantidadcomprada) => {

        producto.stock=(producto.stock-cantidadcomprada)
        
        setqtyCompra((parseInt(qtyCompra)) + (parseInt(cantidadcomprada)))
        setAcum((parseInt(cantidadcomprada)) + (parseInt(qtyCompra)))
        setValorCompra(parseInt(producto.price) * (acum ? parseInt(acum) :parseInt(cantidadcomprada)))


        console.log('total qty compra' + qtyCompra);
        console.log('total compra acum' + acum);

        const repetido = carrito.find((carr)=>carr.id=== Number(producto.id))

        // repetido ? carrito.map(p=> p.id===producto.id? p.stock = p.stock + 1 : 0) :setCarrito([...carrito,producto])
        repetido ? carrito.map(p=> p.id===producto.id? setqtyCompra(qtyCompra + cantidadcomprada) : 0) :setCarrito([...carrito,producto])

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
      setqtyCompra(0)
      setValorCompra(0)

    }



  return (
    <GlobalContext.Provider value= {{carrito,setCarrito,qtyCompra,valorCompra,setqtyCompra,AddToCart,removeItem,clear,isInCart}} >
        {children}
    </GlobalContext.Provider>
  )
}

export default CartContext