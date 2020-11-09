import React, {useState ,useEffect } from 'react';
import ItemDetail from './ItemDetail.js';

function ItemDetailContainer(title, price, description, img, stock) {
  const getDetail = new Promise((res) =>{
    setTimeout(() => {
      res([ {
        title:{title},
        price:{price},
        description:{description},
        img:{img},
        stock:{stock},
      }
  ])}, 2000)
  })
  const [detail, setDetail] = useState([]);
    useEffect(() => {
      getDetail.then(result=>
        setDetail(result))
       }, [detail]);
       return <>
       {detail.length > 0 ? 
  <ItemDetail detail={detail} initial={1} /> : <span>CARGANDO</span>
       }
  </>
    }
  
  export default ItemDetailContainer;