import React, {useContext, useEffect} from 'react';
import CartItem from './CartItem.js'
import {CartContext} from './CartContext.js'

function Cart(){
    const {cart, money, quantity, delivery, deliveryTime} = useContext(CartContext);
    useEffect(() => {
      deliveryTime()
    });
    return <>
        
        <section>

<div className="row">

  
  <div className="col-lg-8">

    
    <div className="mb-3">
      <div className="pt-4 wish-list">

        <h5 className="mb-4">Carrito (<span>{quantity}</span> productos)</h5>

        <hr className="mb-4"/>
        { cart.length > 0 && cart.map( product => <CartItem key={product.id} 
                id={product.id} title={product.title} img={product.img} price={product.price} 
                amount={product.amount} />)}
      </div>
    </div>
    

    
    <div className="mb-3">
      <div className="pt-4">

        <h5 className="mb-0">Envío a domicilio</h5>
        <p className="mb-4">Hasta las 14hs llega hoy.</p>

        <strong><p className="mb-0">{delivery}</p></strong>
      </div>
    </div>
    

    
    <div className="mb-3">
      <div className="pt-4">

        <h5 className="mb-4">Medios de pago</h5>

        <img className="mr-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
          alt="Visa"/>
        <img className="mr-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
          alt="American Express"/>
        <img className="mr-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
          alt="Mastercard"/>
        <img className="mr-2" width="45px"
          src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
          alt="PayPal acceptance mark"/>
      </div>
    </div>
 

  </div>
 

  
  <div className="col-lg-4">

    
    <div className="mb-3">
      <div className="pt-4">

        <h5 className="mb-3">Tu compra</h5>

        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
            Sub-total
            <span>${money}</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center px-0">
            Envío
            <span>Gratis</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
            <div>
              <strong>Total</strong>
            </div>
            <span><strong>{money}</strong></span>
          </li>
        </ul>

        <button type="button" className="btn btn-primary btn-block">Checkout</button>

      </div>
    </div>
   

    
    <div className="mb-3">
      <div className="pt-4">
        <div className="collapse" id="collapseExample">
          <div className="mt-3">
            <div className="md-form md-outline mb-0">
              <input type="text" id="discount-code" className="form-control font-weight-light"
                placeholder="Enter discount code"/>
            </div>
          </div>
        </div>
      </div>
    </div>
   

  </div>


</div>


</section>



   </>
}

export default Cart;