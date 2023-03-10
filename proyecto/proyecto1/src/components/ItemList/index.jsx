import React from 'react'
import Item from '../Item'

const ItemList = ({productos}) => {
  return (
    <div className='containerCards'>
      {productos.map(producto => {
        return <Item product={producto} key= {producto.id} />
      })}  
    </div>
  )
}

export default ItemList

