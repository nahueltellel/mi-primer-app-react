import React, {useState} from 'react';
import ItemCount from './ItemCount.js';
import ItemDetailContainer from './ItemDetailContainer.js';

  
function Item({id, title, price, description, img, stock}){
   const [display, setDisplay] = useState(false);
   const getIdc = () => {
    setDisplay(true)
  }
    return <>
    <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a onClick={getIdc}><img class="card-img-top" src= {img} alt={title} /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{title}</a>
                </h4>
                <h5>{price}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className="card-footer">
              <ItemCount max={stock} min={1} />
              </div>
              </div>
          </div>
          <div className={display ? "mostrar" : "ocultar" }>
     <ItemDetailContainer id={id} title={title} price={price} description={description} img={img} stock={stock} />
       </div> 
    </>
}

export default Item;