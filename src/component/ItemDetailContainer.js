import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';


function ItemDetailContainer({id, title, price, description, img, stock}){
  const [item, setItem ] = useState([]);
    useEffect(() => {
      const task = new Promise((res) =>{
        setTimeout(() => {
          res([  {
            id: {id},
            price: {price},
            title: {title},
            description: {description},
            img: {img},
            stock: {stock},              
          }
        ])}, 2000)
      });
    task.then(result=>
      setItem(result))
     }, [item]);
       return <>
       { item.length > 0 ? 
  <ItemDetail item={item} /> : <span>CARGANDO</span>
}
  </>
    }
  
  export default ItemDetailContainer;