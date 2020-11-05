import React from 'react';
import Item from './Item.js';


function ItemList({items}){
    return <>
    {Object.keys(items).map(i=> {
        return(
            <Item title={items[i].title} price={items[i].price} description={items[i].description} img={items[i].img} stock={items[i].stock} />
    )
    })}
</>
}
export default ItemList;