import React from 'react'
import './Confirmation.css';
import { useCart, useCartDispatch } from '../hooks/CartContexts';

const Confirmation = ({ isConfirm, setIsConfirm }) => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const total = cart.reduce((acc, cur) => acc + (cur.price * cur.quantity), 0);

  return (
    <div 
      className={`confirm-wrapper ${isConfirm ? 'visible' : 'hidden'}`} 
      onClick={() => setIsConfirm(false)}
    >
      <div 
        className={`confirm-content ${isConfirm ? 'show' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <img src='assets/images/icon-order-confirmed.svg' alt='order confirmed' className='confirm-icon' />
        <div>
          <h2 className='confirm-title'>Order Confirmed</h2>
          <p className='confirm-message'>We hope you enjoy your food!</p>
        </div>

        <div className='confirm-orders'>
          {cart?.map((item) => {
            const { id, name, modifiedCategory, price, quantity } = item;

            return (
              <div className='confirm-order' key={id}>
                <div className='confirm-order-detail'>
                  <img src={`assets/images/image-${modifiedCategory}-thumbnail.jpg`} className='confirm-order-thumbnail' />
                  <div>
                    <h3 className='confirm-order-menu trancate'>{name}</h3>
                    <div className='confirm-order-each-price'>
                      <p className='confirm-order-quantity'>{quantity}x</p>
                      <p className='confirm-order-price'><span className='confirm-order-price-at'>@</span>${price.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
                <p className='confirm-order-subtotal'>${(price * quantity).toFixed(2)}</p>
              </div>
            )
          })}
          <div className='confirm-order-total'>
            <p>Order Total</p>
            <p className='confirm-order-total-price'>${total.toFixed(2)}</p>
          </div>
        </div>

        <button
         className='start-new-order-btn'
         onClick={() => {
          dispatch({ type: 'clear' })
          setIsConfirm(false)
         }}
        >
          Start New Order
        </button>
      </div>
    </div>
  )
}

export default Confirmation
