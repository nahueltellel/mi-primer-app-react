import React from 'react';
import {Link} from 'react-router-dom';

function Categories() {
    return <>
    <div className="col-lg-3">
            <h1 className="my-4">Anime Store</h1>
              <div className="list-group">
                 <a className="list-group-item"><Link to={"/category/manga"}>Manga</Link></a>
                 <a className="list-group-item"><Link to={"/category/figuras"}>Figuras</Link></a>
                 <a className="list-group-item"><Link to={"/category/accesorios"}>Accesorios</Link></a>
              </div>
          </div>
    </>
}

export default Categories;