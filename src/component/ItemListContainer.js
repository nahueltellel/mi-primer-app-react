import React, { useState, useEffect } from "react";
import slamdunk from '../img/slamdunk.jpg';
import tengen from '../img/tengen.jpg';
import tokyoghoul from '../img/tokyoghoul.jpg';
import ItemCount from './ItemCount.js'

function ItemListContainer() {
    return <>
    <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <h1 class="my-4">Anime Store</h1>
              <div class="list-group">
                 <a href="#" class="list-group-item">Manga</a>
                 <a href="#" class="list-group-item">Figuras</a>
                 <a href="#" class="list-group-item">Accesorios</a>
              </div>
          </div>
          <div class="col-lg-9">
          <div id="carouselExampleIndicators" class="carousel slide my-4" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner" role="listbox">
            <div class="carousel-item active">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block img-fluid" src="http://placehold.it/900x350" alt="Third slide" />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div class="row">
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
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src={tengen} alt="Tengen toppa" /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Tengen Toppa</a>
                </h4>
                <h5>$24.99</h5>
                <p class="card-text">Llavero metálico Tengen Toppa</p>
              </div>
              <div class="card-footer">
                <ItemCount amount={1} max={10} min={1} />
              </div>
              </div>
          </div>
          <div class="col-lg-4 col-md-6 mb-4">
            <div class="card h-100">
              <a href="#"><img class="card-img-top" src={tokyoghoul} alt="Tokyo ghoul" /></a>
              <div class="card-body">
                <h4 class="card-title">
                  <a href="#">Tokyo ghoul</a>
                </h4>
                <h5>$24.99</h5>
                <p class="card-text">Figura de tokyo ghoul</p>
              </div>
              <div class="card-footer">
              <ItemCount amount={1} max={10} min={1} />
              </div>
              </div>
          </div>
</div>
</div>
</div>
</div>

    </>
}

export default ItemListContainer;