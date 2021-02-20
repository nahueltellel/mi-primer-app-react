import React from 'react';
import {Link} from 'react-router-dom';

  
function Item({id, title, price, description, img}){
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
              <Link to={"/item/" + id}>
              <button className="btn btn-primary">
                Comprar
                </button>
                </Link>
              </div>
              </div>
          </div>
    </>
}

export default Item;