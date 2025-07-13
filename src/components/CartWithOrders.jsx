import React from 'react';
import { useCartDispatch } from '../hooks/CartContexts';
import './CartWithOrders.css';

const CartWithOrders = ({ cart, total, isConfirm, setIsConfirm }) => {
  const dispatch = useCartDispatch();

  return (
    <div className='cart-detais-with-orders'>

    {cart.map((item) => {
      const { id, name, price, quantity } = item;

      return (
        <div className='cart-item' key={id}>
          <div>
            <h3 className='cart-item-menu'>{name}</h3>
            <div className='cart-item-price'>
              <p className='cart-item-quantity'>{quantity}x</p>
              <p className='cart-item-price'><span className='cart-item-price-at'>@</span>${price.toFixed(2)}</p>
              <p className='cart-item-subtotal'>${(quantity * price).toFixed(2)}</p>
            </div>
          </div>
          <button 
            type='button' 
            className='cart-item-remove'
            onClick={() => dispatch({ type: "remove", payload: { id } })}
          ></button>
        </div>
        )
      })}
      <div className='cart-item-total'>
        <p>Order Total</p>
        <p className='cart-item-total-price'>${total.toFixed(2)}</p>
      </div>
      <div className='carbon-wrapper'>
        <img src='assets/images/icon-carbon-neutral.svg' alt='carbon neutral' className='carbon-icon' />
        <p className='carbon-description'>This is a <strong>carbon-neutral</strong> delivery</p>
      </div>
      <button
        className='cart-confirm-btn'
        onClick={() => setIsConfirm(!isConfirm)}
      >
        Confirm Order
      </button>
    </div>
  )
}

export default CartWithOrders
