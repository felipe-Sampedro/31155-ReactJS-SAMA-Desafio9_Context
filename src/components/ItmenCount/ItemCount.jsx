import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GlobalContext } from '../CartContext/CartContext'

const ItemCount = ({window,onAdd}) => {
    
    const [counter,setCounter] = useState(1)
    
    const [quantityToAdd, setQuantityToAdd] = useState(null)

    const {carrito,AddToCart}=useContext(GlobalContext)

    function sumar(){
        counter < window.stock && setCounter(counter+1)
    }

    function restar(){
        counter > 1 && setCounter(counter-1)
    }


  return (
    
    <div>
        <p><strong>stock disponible: </strong>{window.stock}</p>
        <div className='d-flex justify-content-between p-2'>
            <button onClick={restar}>-</button>
            <p>{counter}</p>
            <button onClick={sumar}>+</button>

        </div>
        <div className="d-flex justify-content-center p-3">
            <Link to="/cart" >
                <button onClick={()=>onAdd(counter,window.title)} className="btn btn-outline-dark flex-shrink-0" type="button">
                    Ver Carrito
                </button>

{/*                 <div>
                    <button className='btn btn-info m-2' onClick={()=> AddToCart(windowcount)}>Agregar al Carrito Final</button>
                </div> */}


            </Link>
        </div>
    </div>
  )
}
export default ItemCount

