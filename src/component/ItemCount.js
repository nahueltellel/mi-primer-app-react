import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import {CartContext} from './CartContext';

function ItemCount({item, id, onAdd, onRemove, count }){
  const [open, setOpen] = useState(false);
  const { CartAdd } = useContext(CartContext);
  function addAndOpen(item, id, count){
    CartAdd(item, id, count);
    setOpen(true);
}

    return <>
       <div className="container">
        <div className="qty mt-5">
          <span className="minus bg-dark" onClick={onRemove}>-</span>
          <input type="number" className="count" name="qty" value={count} />
          <span className="plus bg-dark" onClick={onAdd}>+</span>
        </div>
        { !open? (<button className="btn btn-primary" onClick={ () => addAndOpen(item,count,id)}>Añadir al carrito</button>)
        : (<Link to="/cart"><button className="btn btn-primary">Terminar la compra</button></Link>)
      }

        </div>
          </>
  }

  export default ItemCount;
