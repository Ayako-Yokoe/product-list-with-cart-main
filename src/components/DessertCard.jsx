import React from 'react';
import { useCart, useCartDispatch } from '../hooks/CartContexts';
import './DessertCard.css';
import QuantityButton from './QuantityButton';
import AddToCartButton from './AddToCartButton';

const DessertCard = ({ item }) => {
  const cart = useCart();
  const dispatch = useCartDispatch();

  const {image, name, category, price} = item;
  const id = name.toLowerCase().replace(/\s+/g, '-');
  const modifiedCategory = 
    category === 'Pie' 
      ? 'meringue' 
      : category === 'Crème Brûlée' 
      ? 'creme-brulee' 
      : category.toLowerCase().replace(/\s+/g, '-');

  const inCart = cart.find(item => item.id === id);
  const quantity = inCart ? inCart.quantity : 0;

  return (
    <div className='dessert-card'>
      <div className='dessert-img-wrapper'>
        <picture>
          <source media='(min-width: 45rem)' srcSet={image.desktop} />
          <source media='(min-width: 35rem)' srcSet={image.tablet} />
          <img src={image.mobile} alt='waffle with berries' className={`dessert-img ${inCart ? 'selected' : ''}`} />
        </picture>

        {inCart ? (
            <QuantityButton id={id} quantity={quantity} />
          ) : (
            <AddToCartButton
              onClick={() => 
                dispatch({
                  type: 'add',
                  payload: { id, name, modifiedCategory, price }
                })
              } 
            />
          )
        }
      </div>
      <div className='dessert-detail'>
        <p className='dessert-detail--category'>{category}</p>
        <h3 className='dessert-detail--name'>{name}</h3>
        <p className='dessert-detail--price'>${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default DessertCard
