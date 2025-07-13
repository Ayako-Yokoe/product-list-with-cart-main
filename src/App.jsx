import './App.css'
import { useState } from 'react';
import Cart from './components/Cart'
import Confirmation from './components/Confirmation'
import Desserts from './components/Desserts'
import { CartProvider } from './hooks/CartContext'

function App() {
  const [isConfirm, setIsConfirm] = useState(false);

  return (
    <>
      <CartProvider>
        <div className='app-wrapper'>
          <Desserts />
          <Cart isConfirm={isConfirm} setIsConfirm={setIsConfirm}   />
        </div>
        <Confirmation isConfirm={isConfirm} setIsConfirm={setIsConfirm} />
      </CartProvider>
    </>
  )
}

export default App
