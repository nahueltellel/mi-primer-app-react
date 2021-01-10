import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount.js';
import ItemDetailContainer from './ItemDetailContainer.js';

  
function Item({id, title, price, description, img, stock}){
    return <>
    <div className="col-lg-4 col-md-6 mb-4">
            <div className="card h-100">
              <a><img class="card-img-top" src= {img} alt={title} /></a>
              <div className="card-body">
                <h4 className="card-title">
                  <a href="#">{title}</a>
                </h4>
                <h5>{price}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className="card-footer">
              <button className="btn btn-primary">
                <Link to={"/item/" + id}>Ver más</Link>
                </button>
              </div>
              </div>
          </div>
    </>
}

export default Item;