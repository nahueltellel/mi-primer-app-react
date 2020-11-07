import React, {useState ,useEffect } from 'react';
import slamdunk from '../img/slamdunk.jpg';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';
import ItemDetail from './ItemDetail';

const getItems = () => {
    return new Promise((res) =>{
      res([  {
        id: 1,
        price: "24,99",
        title: "Slam Dunk",
        description: "Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk",
        img: {slamdunk},
        stock: 10,              
    },
    {
      id: 2,
      price: "24,99",
      title: "Tokyo Ghoul",
      description: "Figura de Kaneki-ken de Tokyo Ghoul",
      img: {tokyoghoul},
      stock: 4,             
  },
  {
    id: 3,
    price: "24,99",
    title: "Tengen Toppa",
    description: "Llavero metálico de Tengen Toppa",
    img: {tengen},
    stock: 7,                
  }
  ])})
  }
  
  function ItemDetailContainer() {
    const [items, setItem ] = useState([]);
  
      useEffect(() => {
        getItems().then(result=>
          setItem(result))
         }, [items]);
         return <>
         { items.length > 0 ? 
    <ItemDetail items={items} initial={1} /> : <span>CARGANDO</span>
         }
    </>
      }
  
  export default ItemDetailContainer;