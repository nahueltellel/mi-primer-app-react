import React from "react";

function ItemCount({item, onAdd, add, onRemove, count, cartAdd }){

    return <>
       <div className="container">
        <div className="qty mt-5">
          <span className="minus bg-dark" onClick={onRemove}>-</span>
          <input type="number" className="count" name="qty" value={count} />
          <span className="plus bg-dark" onClick={onAdd}>+</span>
        </div>
        { !add? (<button className="btn btn-primary" onClick={ () => cartAdd(item)}>Añadir al carrito</button>)
        : (<button className="btn btn-primary">Terminar la compra</button>)
      }

        </div>
          </>
  }

  export default ItemCount;
