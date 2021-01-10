import React from 'react';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer.js';
import ItemDetailContainer from './component/ItemDetailContainer.js';
import Categories from './component/Categories.js';
import Slider from './component/Slider.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


function App() {
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
          <ItemListContainer />
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
