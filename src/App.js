import React, {useState ,useEffect } from 'react';
import './App.css';
import slamdunk from './img/slamdunk.jpg';
import tengen from './img/tengen.jpg';
import tokyoghoul from './img/tokyoghoul.jpg';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer.js';
import ItemDetailContainer from './component/ItemDetailContainer.js';
import Categories from './component/Categories.js';
import Slider from './component/Slider.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const products = [{
      id: 1,
      price: "35,99",
      title: "Slam Dunk",
      description: "Figuras coleccionables de Hanamichi y Rukawa de Slam Dunk",
      img: slamdunk,
      stock: 10,
      categoryId: "figuras",              
  },
  {
    id: 2,
    price: "24,99",
    title: "Tokyo Ghoul",
    description: "Figura de Kaneki-ken de Tokyo Ghoul",
    img: tokyoghoul,
    stock: 4,
    categoryId: "figuras",             
},
{
  id: 3,
  price: "15,00",
  title: "Tengen Toppa",
  description: "Llavero metálico de Tengen Toppa",
  img: tengen,
  stock: 7,
  categoryId: "accesorios",                
},
{
id: 4,
  price: "17,00",
  title: "Attack on Titan",
  description: "Attack on titan colección completa",
  img: tengen,
  stock: 12,
  categoryId: "manga",
}]

function App() {
  const [items, setItems] = useState([])
  useEffect(() => {
  const task = new Promise((res) =>{
    setTimeout(() => {
      res(products);
    }, 2000);
  }
  )
  task.then(result =>setItems(result))
},[]);

  return (
    <>
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
              <ItemListContainer products={items} />
            </Route>
            <Route exact path="/category/:id">
              <ItemListContainer products={items}/>
            </Route>
            <Route exact path ="/item/:id">
              <ItemDetailContainer />
            </Route>
          </Switch>
          </div>
</div>
</div>
</div> 
</BrowserRouter>
    </>
    );
}

export default App;
