import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { catalogo } from '../../Config'
import ItemList from '../ItemList/ItemList'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Loader from '../Loader/Loader'

const CategoryContainer = () => {

  const{categoryId} = useParams()
  const [prods, setProds] = useState([])
  const group = catalogo.filter((prod)=>prod.categoryId === (categoryId))

  useEffect(() => {
      const promesaf = new Promise((resolve,reject) =>{
          setTimeout(() => {
              resolve(group)
          }, 500);
      })

      promesaf.then((res)=>setProds(res))
      .catch((err)=>console.log(err))

    return () => {
    }
  }, [categoryId])
    
  return (
    <div>
        {prods ? <ItemListContainer prods={prods}/> : <Loader />}
    </div>
  )
}

export default CategoryContainer