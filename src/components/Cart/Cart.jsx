import React, { useContext } from 'react'
import { GlobalContext } from '../CartContext/CartContext'


const Cart = () => {

  const {carrito,clear} = useContext(GlobalContext)

  return (
    <>
      {carrito.length > 0 ? carrito.map((item,index)=>(
        <div key={index} className='d-flex justify-content-center p-2'>
          <img className="card-img-top mb-5 mb-md-0" src={item.imagenUrl} style={{width:'100px',height:'100px'}} />
          <p style={{width:'350px'}}>{item.title}</p>
          <p>{item.stock}</p>
        </div>

      )): <h1>Carrito esta vacio</h1>

      }
      {carrito.length !== 0?<button className='btn btn-danger m-2' onClick={()=> clear()}>Borrar Todo</button>:<p></p>}
    </>
  )
}

export default Cart