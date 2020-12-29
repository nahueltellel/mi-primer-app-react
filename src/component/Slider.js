import React from 'react';
import banner1 from '../img/banner1.jpg';
import banner2 from '../img/banner2.jpeg';
import banner3 from '../img/banner3.jpg';


function Slider(){
    return <>
    <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src = {banner1} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={banner2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src={banner3} alt="Third slide" />
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
    </>

}

export default Slider;