import { useEffect, useState } from 'react'
import './style.css'
import ItemDetail from '../../components/ItemDetail'
import { useParams } from 'react-router-dom'
import React from "react";

const ItemDetailContainer = () => {

  const [detail, setDetail] = useState({})

  const {id} = useParams()

  useEffect (()=> {

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => {
        console.log (response);
        return response.json()
      })
      .then (json => {
        console.log(json)
        setDetail(json)
      })
      .catch((err) => {
        alert("Hubo un error")
      });
    }, [id])


  return (
    <div>
      {
        Object.keys(detail).length === 0
        ? <h2>Cargando...</h2>
       : <ItemDetail detail={detail}/>
      }
    </div>
  )
}

export default ItemDetailContainer