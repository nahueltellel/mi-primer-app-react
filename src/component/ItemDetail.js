import { render } from '@testing-library/react';
import React from 'react';
import Detail from './Detail.js';


function ItemDetail({item}){
  return <>
       {Object.keys(item).map(i=> {
        return(
            <Detail id={item[i].id} title={item[i].title} price={item[i].price} description={item[i].description} img={item[i].img} stock={item[i].stock} />
    )
    })}
</>
}

export default ItemDetail;


