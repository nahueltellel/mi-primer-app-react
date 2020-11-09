import React, {useState} from "react";

function ItemCount({amount, max, min}){
    const [count, setCount] = useState(min);
    function onAdd() {
        if(count >= 0 && count < max) {
        setCount(count+amount)
        }
    }
    function onRemove(){
        if(count > min)
        setCount(count-amount)
    }
  
    return <>
       <div className="container">
        <div className="qty mt-5">
          <span className="minus bg-dark" onClick={onRemove}>-</span>
          <input type="number" className="count" name="qty" value={count} />
          <span className="plus bg-dark" onClick={onAdd}>+</span>
          <button className="btn btn-primary">Añadir al carrito</button>
        </div>
        </div>
          </>
  }

  export default ItemCount;