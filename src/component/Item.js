import React from 'react';
import slamdunk from '../img/slamdunk.jpg';
import ItemCount from './ItemCount.js';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';

function Item(){
    return <>
    <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src={slamdunk} alt="slam dunk" /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Slam dunk</a>
                </h4>
                <h5>$24.99</h5>
                <p class="card-text">Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk</p>
              </div>
              <div class="card-footer">
              <ItemCount amount={1} max={10} min={1} />
              </div>
              </div>
          </div>
    </>
}

export default Item;