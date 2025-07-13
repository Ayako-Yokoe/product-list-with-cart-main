import { useReducer } from "react";
import { CartStateContext, CartDispatchContext } from './CartContexts';

function cartReducer(state, action) {
  switch(action.type) {
    case "add": {
      const existing = state.find(item => item.id === action.payload.id);
      if (existing) {
        return state.map(item => 
          item.id === action.payload.id
          ? {...item, quantity: item.quantity + 1}
          : item
        );
      } else {
        return [...state, { ...action.payload, quantity: 1}];
      }
    }
    case "decrement": {
      return state
        .map(item => 
          item.id === action.payload.id
          ? {...item, quantity: item.quantity - 1}
          : item
        )
        .filter(item => item.quantity > 0);
    }
    case "remove": {
      return state.filter(item => item.id !== action.payload.id); 
    }
    case "clear": 
      return [];
    default: 
      throw new Error(`Unknown action: ${action.type}`);
  }
}

const initialDesserts = [];

export function CartProvider({children}) {
  const [cart, dispatch] = useReducer(cartReducer, initialDesserts);

  return (
    <CartStateContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  )
}