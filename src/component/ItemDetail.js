import React from 'react';


function ItemDetail({title, price, description, img, stock}){
  return <>
        <p>{title}, {price}, {description}, {stock}
        </p>
</>

}

export default ItemDetail;

/*
<section className="mb-5">

<div className="row">
  <div className="col-md-6 mb-4 mb-md-0">

    <div id="mdb-lightbox-ui"></div>

    <div className="mdb-lightbox">

      <div className="row product-gallery mx-1">

        <div className="col-12 mb-0">
          <figure className="view overlay rounded z-depth-1 main-img">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
              data-size="710x823">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                className="img-fluid z-depth-1"/>
            </a>
          </figure>
          <figure className="view overlay rounded z-depth-1" style="visibility: hidden;">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
              data-size="710x823">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                className="img-fluid z-depth-1" />
            </a>
          </figure>
          <figure className="view overlay rounded z-depth-1" style="visibility: hidden;">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
              data-size="710x823">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                className="img-fluid z-depth-1" />
            </a>
          </figure>
          <figure className="view overlay rounded z-depth-1" style="visibility: hidden;">
            <a href="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
              data-size="710x823">
              <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                className="img-fluid z-depth-1" />
            </a>
          </figure>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12a.jpg"
                  className="img-fluid" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13a.jpg"
                  className="img-fluid" />
                <div className="mask rgba-white-slight" ></div>
              </div>
            </div>
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14a.jpg"
                  className="img-fluid" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15a.jpg"
                  className="img-fluid" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  <div class="col-md-6">

    <h5>{title}</h5>
    <p className="mb-2 text-muted text-uppercase small">{stock} en stock</p>
    <ul className="rating">
      <li>
        <i className="fas fa-star fa-sm text-primary"></i>
      </li>
      <li>
        <i className="fas fa-star fa-sm text-primary"></i>
      </li>
      <li>
        <i className="fas fa-star fa-sm text-primary"></i>
      </li>
      <li>
        <i className="fas fa-star fa-sm text-primary"></i>
      </li>
      <li>
        <i className="far fa-star fa-sm text-primary"></i>
      </li>
    </ul>
    <p><span class="mr-1"><strong>{price}</strong></span></p>
    <p className="pt-1">{description}</p>
    <div className="table-responsive">
      <table className="table table-sm table-borderless mb-0">
        <tbody>
          <tr>
            <th className="pl-0 w-25" scope="row"><strong>Modelo</strong></th>
            <td>JP 5407X</td>
          </tr>
          <tr>
            <th className="pl-0 w-25" scope="row"><strong>Origen</strong></th>
            <td>Japón</td>
          </tr>
          <tr>
            <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
            <td>USA, Europe</td>
          </tr>
        </tbody>
      </table>
    </div>
</div>
</div> 
</section> */
