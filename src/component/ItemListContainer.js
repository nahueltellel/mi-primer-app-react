import React from 'react';
import slamdunk from '../img/slamdunk.jpg';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';

function ItemListContainer() {
    return <>
    <div class="container">
        <div class="row">
        <div class="card" style={{width:18+'rem', margin:15+'px'}}>
  <img src={slamdunk} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">$24.95</h5>
    <p class="card-text">Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>
<div class="card" style={{width:18+'rem', margin:15+'px'}}>
  <img src={tengen} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">$15.50</h5>
    <p class="card-text">Llavero metálico de Tengen Toppa.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>
<div class="card" style={{width:18+'rem', margin:15+'px'}}>
  <img src={tokyoghoul} class="card-img-top" />
  <div class="card-body">
    <h5 class="card-title">$45</h5>
    <p class="card-text">Figura coleccionable de Tokyo Ghoul.</p>
    <a href="#" class="btn btn-primary">Añadir al carrito</a>
  </div>
</div>
</div>
</div>

    </>
}

export default ItemListContainer;