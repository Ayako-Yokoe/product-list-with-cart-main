import React from 'react'
import './EmptyCart.css';

const EmptyCart = () => {
  return (
    <div className='cart-detais'>
      <img src='assets/images/illustration-empty-cart.svg' alt='cart is empty' className='cart-empty-img' />
      <p className='cart-message'>Your added items will appear here</p>
    </div>
  )
}

export default EmptyCart
