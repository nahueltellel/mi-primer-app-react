import React, {useState ,useEffect } from 'react';
import ItemList from './ItemList.js';
import {useParams} from "react-router-dom";
import {firestore} from "../firebaseConfig";

function ItemListContainer({products}) {
  const [item, setItem] = useState([]);
  const {id} = useParams();
    useEffect(() => {
      if(id){
        const db = firestore
        const collection = db.collection('items')
        const query = collection.where('categoryId',"==",id).get()
        query
        .then((result) => {
            setItem(result.docs.map(p => ({id: p.id, ...p.data()})))
          })
          .catch((error) => {
            console.log(error)
          })
    }
    else{
        setItem(products)
    }     

}, [id, products])
       return <>
       { item.length > 0 ? 
  <ItemList products={item} /> : <span>CARGANDO</span>
       }
  </>
    }

export default ItemListContainer;