import React from 'react'
import './Cart.css';
import { useCart } from '../hooks/CartContexts';
import CartWithOrders from './CartWithOrders';
import EmptyCart from './EmptyCart';

const Cart = ({ isConfirm, setIsConfirm }) => {
  const cart = useCart();
  const totalItems = cart.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = cart.reduce((acc, cur) => acc + cur.price * cur.quantity, 0);
  const isOrder = cart.length > 0;

  return (
    <div className='cart-wrapper'>
      <h2 className='cart-title'>Your Cart ({ totalItems })</h2>
      <div>
      {isOrder ? (
          <CartWithOrders cart={cart} total={total} isConfirm={isConfirm} setIsConfirm={setIsConfirm} />
        ) : (
          <EmptyCart />
        )
      }
      </div>
    </div>
  )
}

export default Cart
