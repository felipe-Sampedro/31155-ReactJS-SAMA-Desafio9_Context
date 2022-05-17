import React, { useState } from 'react'
import ItemCount from '../ItmenCount/ItemCount'

const ItemDetail = ({window}) => {

 /*    const [quantityToAdd, setQuantityToAdd] = useState(1) */

    function onAdd(quantityToAdd,ref){
        console.log('La cantidad agregada al carrito es: ' + quantityToAdd +' de la referencia '+ ref);
/*         setQuantityToAdd(quantityToAdd) */
    }

  return (
    <div>
        <section className="py-1">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={window.imagenUrl} alt="..." /></div>
                    <div className="col-md-6" style={{backgroundColor:"lightgray"}}>
                        <h1 className="display-5 fw-bolder">{window.title}</h1>
                        <div className="fs-5 mb-5">
                            <span>PRECIO: {window.price}</span>
                        </div>
                        <p className="lead">{window.description}</p>
                        <div className='d-flex justify-content-center' /* style={{width:'250px'}} */>
                            <ItemCount stock={window.stock} title={window.title} onAdd={onAdd}/> 

                        </div>

                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default ItemDetail