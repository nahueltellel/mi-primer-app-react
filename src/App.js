import React from 'react';
import './App.css';
import NavBar from './component/NavBar.js';
import ItemListContainer from './component/ItemListContainer.js';
import Categories from './component/Categories.js';
import Slider from './component/Slider.js';

function App() {
  return (
    <>
    <NavBar />
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
   
    </>
    );
}

export default App;
