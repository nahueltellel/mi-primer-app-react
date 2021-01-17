import React, {useState ,useEffect } from 'react';
import ItemList from './ItemList.js';
import {useParams} from "react-router-dom";

function ItemListContainer({products}) {
  const [item, setItem] = useState([]);
  const {id} = useParams();
    useEffect(() => {
      if(id){
        const category = products.filter(product => product.categoryId == id)
        setItem(category)
      }
      else {
        setItem(products)
      }
    },[id, products])
       return <>
       { item.length > 0 ? 
  <ItemList products={item} initial={1} /> : <span>CARGANDO</span>
       }
  </>
    }

export default ItemListContainer;