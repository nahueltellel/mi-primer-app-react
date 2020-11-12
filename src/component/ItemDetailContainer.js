import React from 'react';
import ItemDetail from './ItemDetail.js';
import {useParams} from 'react-router-dom';

function ItemDetailContainer({id, title, price, description, img, stock}){
  const {itm} = useParams();
       return <>
  <ItemDetail id={id} title={title} price={price} description={description} img={img} stock={stock} initial={1} /> : <span>CARGANDO</span>
  </>
    }
  
  export default ItemDetailContainer;