import React from 'react'
import './Desserts.css';
import data from "../data.json";
import DessertCard from './DessertCard';

const Desserts = () => {
  return (
    <div className='dessert-wrapper'>
      <h1 className='main-title'>Desserts</h1>
      <div className='dessert-card-wrapper'>
        {data.map((item) => (
          <DessertCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

export default Desserts
