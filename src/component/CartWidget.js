import React, {useContext} from 'react';
import { CartContext } from './CartContext'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

function CartWidget() {
    const {quantity} = useContext(CartContext);
    return <>
        <Link to={"/cart"}><button className="btn btn-outline-success my-2 my-sm-0"><FontAwesomeIcon icon={faCartArrowDown} />({quantity})</button></Link>
        </>
}
export default CartWidget;