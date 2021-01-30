import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import {useParams} from "react-router-dom";
import {firestore} from "../firebaseConfig.js";
import slamdunk from '../img/slamdunk.jpg';
import titan from '../img/titan.jpg';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';

/* const products= [
  {
    id: 1,
    price: 35.99,
    title: "Slam Dunk",
    description: "Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk",
    img: slamdunk,
    stock: 10,              
},
{
  id: 2,
  price: 24.99,
  title: "Tokyo Ghoul",
  description: "Figura de Kaneki-ken de Tokyo Ghoul",
  img: tokyoghoul,
  stock: 4,             
},
{
id: 3,
price: 15,
title: "Tengen Toppa",
description: "Llavero metálico de Tengen Toppa",
img: tengen,
stock: 7,                
},
{
  id: 4,
    price: 17.50,
    title: "Attack on Titan",
    description: "Attack on titan colección completa",
    img: titan,
    stock: 12,
  }
] */

function ItemDetailContainer(){
  const [fireItem, setFireItem ] = useState();
  const {id} = useParams();
    useEffect(() => {
     const db = firestore
     const collection = db.collection('items') 
     const item = collection.doc(id)

     item.get()
      .then( (i) => {
        setFireItem({ id: i.id, ...i.data()})
      })

  },  [id]);
       return <>
       { fireItem ? 
  <ItemDetail item={fireItem} id={fireItem.id} price={fireItem.price} title={fireItem.title} description={fireItem.description} img={fireItem.img} stock={fireItem.stock} /> : <span>CARGANDO</span>
}
  </>
    }
  
  export default ItemDetailContainer;