import React, { useState } from 'react';
import './cart.css'

import cn from 'classnames'

const Cart = () => {

  const [isCartOpen, toggle] = useState(false);

  function toggleCart () {
    toggle(!isCartOpen);
    document.body.classList.toggle('_lock');
  }

  return (
    // <div className={ cn('cart', { active: isCartOpen }) }  onClick={ toggleCart } >
    <div className='cart'>egwieghwoIEHGOWIeghOIEHGOIEGOSirgisrhsrg </div>
      
    // </div>
      
  );
};

export default Cart;