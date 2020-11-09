import React from 'react';
import ItemDetail from './ItemDetail.js';

function ItemDetailContainer({title, price, description, img, stock}) {
       return <>
  <ItemDetail title={title} price={price} description={description} img={img} stock={stock} initial={1} /> : <span>CARGANDO</span>
  </>
    }
  
  export default ItemDetailContainer;