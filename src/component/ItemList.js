import React from 'react';
import Item from './Item.js';


function ItemList({products}){
    return <>
    {Object.keys(products).map(i=> {
        return(
            <Item id={products[i].id} title={products[i].title} price={products[i].price} description={products[i].description} img={products[i].img} stock={products[i].stock} />
    )
    })}
</>
}
export default ItemList;