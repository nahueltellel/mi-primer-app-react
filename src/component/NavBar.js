import React from 'react';
import {Link} from 'react-router-dom';
import CartWidget from './CartWidget.js';

function NavBar(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to={"/"}><a className="navbar-brand" href="">Mi tienda</a> </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <Link to={"/"}><a className="nav-link" href="">Home <span className="sr-only">(current)</span></a></Link>
      </li>
      <div className="dropdown show">
        <a className="nav-link dropdown-toggle" id="dropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </div>
    </ul>
      <CartWidget />
  </div>
  </div>
</nav>
        </>
    )
}

export default NavBar;
