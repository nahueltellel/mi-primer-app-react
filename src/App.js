import React, {useState ,useEffect } from 'react';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer.js';
import ItemDetailContainer from './component/ItemDetailContainer.js';
import Categories from './component/Categories.js';
import Slider from './component/Slider.js';
import Cart from './component/Cart.js';
import CartProvider from './component/CartContext';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {firestore} from "./firebaseConfig";

/*const products = [{
      id: 1,
      price: 35.99,
      title: "Slam Dunk",
      description: "Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk",
      img: slamdunk,
      stock: 10,
      categoryId: "figuras",              
  },
  {
    id: 2,
    price: 24.99,
    title: "Tokyo Ghoul",
    description: "Figura de Kaneki-ken de Tokyo Ghoul",
    img: tokyoghoul,
    stock: 4,
    categoryId: "figuras",             
},
{
  id: 3,
  price: 15.00,
  title: "Tengen Toppa",
  description: "Llavero metálico de Tengen Toppa",
  img: tengen,
  stock: 7,
  categoryId: "accesorios",                
},
{
id: 4,
  price: 17.50,
  title: "Attack on Titan",
  description: "Attack on Titan colección completa",
  img: titan,
  stock: 12,
  categoryId: "manga",
}] */

function App() {
  const [fireItems, setFireItems] = useState([])
  useEffect(() =>{
    const dataBase = firestore
    const collection = dataBase.collection('items')
    const query = collection.get()

    query.then((res)=>{
      /* const items_array = []

      docs.forEach(doc =>{
        const nuevoDoc = {
        id : doc.id,
        ...doc.data()
      }
     items_array.push(nuevoDoc)
      })
      setItems(items_array) */

      setFireItems(res.docs.map(doc=>({id:doc.id,...doc.data()})))
    })
    .catch((error)=>{
      console.log(error)
    })
  }, [fireItems])
 /* const [items, setItems] = useState([])
  useEffect(() => {
  const task = new Promise((res) =>{
    setTimeout(() => {
      res(products);
    }, 2000);
  }
  )
  task.then(result =>setItems(result))
},[]); */

  return (
    <>
    <CartProvider>
    <BrowserRouter>
    <NavBar />
    <div class="container">
        <div class="row">
      
        <Categories />
          <div class="col-lg-9">
          <Slider />
          <div class="row">
          <Switch>
            <Route exact path="/">
              <ItemListContainer products={fireItems} />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer products={fireItems}/>
            </Route>
            <Route exact path ="/item/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
            <Cart />
          </Route>
          </Switch>
          </div>
</div>
</div>
</div> 
</BrowserRouter>
</CartProvider>
    </>
    );
}

export default App;
