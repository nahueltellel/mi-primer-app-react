import { faOtter } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import ItemCount from './ItemCount.js';
import ItemDetailContainer from './ItemDetailContainer.js';



function Item({title, price, description, img, stock}){
    return <>
    <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href=""><img class="card-img-top" src={img} alt={title} /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">{title}</a>
                </h4>
                <h5>{price}</h5>
                <p class="card-text">{description}</p>
              </div>
              <div class="card-footer">
              <ItemCount amount={1} max={stock} min={1} />
              </div>
              </div>
          </div>
    </>
}

export default Item;