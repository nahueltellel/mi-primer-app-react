import React, {useState ,useEffect } from 'react';
import ItemList from './ItemList.js';
import slamdunk from '../img/slamdunk.jpg';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';


function ItemListContainer({title}) {
  const [items, setItem ] = useState([]);
  const [stock, setStock] = useState(10);

  const getItems = new Promise((res,rej) =>{
      setTimeout(() => {
        res([  {
          id: 1,
          price: "24,99",
          title: "Slam Dunk",
          description: "Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk",
          image: {slamdunk}                
      },
      {
        id: 2,
        price: "24,99",
        title: "Tokyo Ghoul",
        description: "Figura de Kaneki-ken de Tokyo Ghoul",
        image: {tokyoghoul}                
    },
    {
      id: 3,
      price: "24,99",
      title: "Tengen Toppa",
      description: "Llavero metálico de Tengen Toppa",
      image: {tengen}                
  }
    ])}, 2000)
    })
    useEffect(() => {
      getItems.then(result=>
        setItem(result))
       }, [getItems])
       return <>
       <h1>{title}</h1>
       { items.length > 0 ? 
  <ItemList items={items} stock={stock} initial={1} /> : <span>CARGANDO</span>
       }
  </>
    }

export default ItemListContainer;