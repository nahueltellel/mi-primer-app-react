import React, { useState, useEffect } from "react";

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
       <div class="container">
        <div class="qty mt-5">
          <span class="minus bg-dark" onClick={onRemove}>-</span>
          <input type="number" class="count" name="qty" value={count} />
          <span class="plus bg-dark" onClick={onAdd}>+</span>
          <button class="btn btn-primary">Añadir al carrito</button>
        </div>
        </div>
          </>
  }

  export default ItemCount;