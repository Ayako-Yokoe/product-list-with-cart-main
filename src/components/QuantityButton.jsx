import React from 'react';
import { useCartDispatch } from '../hooks/CartContexts';
import './QuantityButton.css';

const QuantityButton = ({ id, quantity }) => {
  const dispatch = useCartDispatch();

  return (
    <div className='quantity-btn'>
      <button 
        className='quantity-btn-decrement-icon'
        onClick={() => 
          dispatch({ type: 'decrement', payload: { id }})
        }
      ></button>
      <p className='quantity-btn-quantity'>{quantity}</p>
      <button 
        className='quantity-btn-increment-icon'
        onClick={() => 
          dispatch({ type: 'add', payload: { id }})
        }
      ></button>
    </div>
  )
}

export default QuantityButton
