import React, {useState, useEffect} from 'react';
import ItemDetail from './ItemDetail.js';
import {useParams} from "react-router-dom";
import slamdunk from '../img/slamdunk.jpg';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';

const productos= [
  {
    id: 1,
    price: "24,99",
    title: "Slam Dunk",
    description: "Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk",
    img: slamdunk,
    stock: 10,              
},
{
  id: 2,
  price: "24,99",
  title: "Tokyo Ghoul",
  description: "Figura de Kaneki-ken de Tokyo Ghoul",
  img: tokyoghoul,
  stock: 4,             
},
{
id: 3,
price: "24,99",
title: "Tengen Toppa",
description: "Llavero metálico de Tengen Toppa",
img: tengen,
stock: 7,                
}
]

function ItemDetailContainer(){
  const [item, setItem ] = useState();
  const {id} = useParams();
    useEffect(() => {
      const task = new Promise((res) =>{
        setTimeout(() => {
          const i = productos.find(producto => producto.id == id)
        res(i);
      }, 2000);
      });
    task.then(result=>
      setItem(result))
     }, [id]);
       return <>
       { item ? 
  <ItemDetail id={item.id} price={item.price} title={item.title} description={item.description} img={item.img} stock={item.stock} /> : <span>CARGANDO</span>
}
  </>
    }
  
  export default ItemDetailContainer;