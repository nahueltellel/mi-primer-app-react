
import React, {useState} from 'react';
import ItemCount from './ItemCount.js';


function ItemDetail({item, id, price, title, description, img, stock}){
  const [count, setCount] = useState(1);

  function onAdd() {
      if(count >= 0 && count < stock) {
      setCount(count+1)
      }
  }
  function onRemove(){
      if(count > 1)
      setCount(count-1)
  }

  return <>
            <section className="mb-5">

<div className="row">
  <div className="col-md-6 mb-4 mb-md-0">

    <div id="mdb-lightbox-ui"></div>

    <div className="mdb-lightbox">

      <div className="row product-gallery mx-1">

        <div className="col-12 mb-0">
          <figure className="view overlay rounded z-depth-1 main-img">
              <img src={img}
                className="img-fluid z-depth-1"/>
          </figure>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src= {img}
                  className="img-fluid" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src={img}
                  className="img-fluid" />
                <div className="mask rgba-white-slight" ></div>
              </div>
            </div>
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src={img}
                  className="img-fluid" />
                <div className="mask rgba-white-slight"></div>
              </div>
            </div>
            <div className="col-3">
              <div className="view overlay rounded z-depth-1 gallery-item">
                <img src={img}
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
    <hr></hr>
    <ItemCount item={item} id={id} onAdd={onAdd} onRemove={onRemove} count={count} />
</div>
</div>
</section>
<hr></hr>
</>
}

export default ItemDetail;


