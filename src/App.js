import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer.js';
import Categories from './component/Categories.js';
import Slider from './component/Slider.js';
import ItemDetailContainer from './component/ItemDetailContainer.js';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
        <Route exact path="/">
    <div class="container">
        <div class="row">
        <Categories />
          <div class="col-lg-9">
          <Slider />
          <div class="row">
          <ItemListContainer />
          </div>
</div>
</div>
</div>
        </Route>
        <Route exact path="/item/:itm">
          <ItemDetailContainer />
        </Route>
    </Switch>
    </BrowserRouter> 
  );
}

export default App;
