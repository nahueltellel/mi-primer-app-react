import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartArrowDown} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return <>
        <button className="btn btn-outline-success my-2 my-sm-0"><FontAwesomeIcon icon={faCartArrowDown} /></button>
        </>
}
export default CartWidget;