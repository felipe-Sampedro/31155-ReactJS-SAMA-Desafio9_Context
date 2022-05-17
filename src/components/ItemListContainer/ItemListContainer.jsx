import {useEffect, useState} from 'react'
/* import Item from '../Item/Item' */
import ItemList from '../ItemList/ItemList'
import { catalogo } from '../../Config'
import { Link, useParams } from 'react-router-dom'
/* import ItemDetail from '../ItemDetail/ItemDetail' */
/* import { useParams } from 'react-router-dom' */

const ItemListContainer = ({prods}) => {
const [productos,setProductos] = useState([])

useEffect(() => {
  const pedido = new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(prods ? prods : catalogo)
    }, 2000);
  });

  pedido.then((res) => setProductos(res))
  .then(()=>console.log(productos))
  .catch((err)=>console.log(err))

  return () => {    
  }
}, [prods])

return (
    <div className='bg-info'>ItemListContainer
    <Link to= {'/Cart'}>Ver Carrito</Link>
        <div className="d-flex justify-content-evenly flex-wrap p-4">
          
          <ItemList productos={productos}/>
        </div>

    </div>
  )
}

export default ItemListContainer