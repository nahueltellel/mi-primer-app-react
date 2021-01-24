import React, {useContext} from 'react';
import { CartContext } from './CartContext'

function CartItem({ id, title, img, price, amount }){
    const { deleteFromCart } = useContext(CartContext)
    return <>
  <div className="row mb-4">
  <div className="col-md-5 col-lg-3 col-xl-3">
    <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
      <img className="img-fluid w-100"
        src={img} alt="Sample" />
    </div>
  </div>
  <div className="col-md-7 col-lg-9 col-xl-9">
    <div>
      <div className="d-flex justify-content-between">
        <div>
          <h5>{title}</h5>
          <p className="mb-3 text-muted text-uppercase small">Cantidad : {amount}</p>
          <p className="mb-2 text-muted text-uppercase small">Nº Catalogo: {id}</p>
        </div>
        <div>
          <div className="def-number-input number-input safari_only mb-0 w-100">
            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              className="minus"></button>
            <input className="quantity" min="0" name="quantity" value="1" type="number"/>
            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              className="plus"></button>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <a href="" onClick={deleteFromCart} type="button" className="card-link-secondary small text-uppercase mr-3"><i
              className="fas fa-trash-alt mr-1"></i> Borrar item </a>
        </div>
        <p className="mb-0"><span><strong>{price}</strong></span></p>
      </div>
    </div>
  </div>
</div>
</>
}

export default CartItem;