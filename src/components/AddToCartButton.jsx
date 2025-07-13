import React from 'react';
import './AddToCartButton.css';

const AddToCartButton = ({ onClick }) => {
  return (
    <button className='add-btn' onClick={onClick}>
      <img src='assets/images/icon-add-to-cart.svg' alt='add-to-cart' className='add-btn--cart-icon' />
      <span className='add-btn--title'>Add to Cart</span>
    </button>
  )
}

export default AddToCartButton
