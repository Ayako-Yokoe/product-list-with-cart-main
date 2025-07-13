import { createContext, useContext} from "react";

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

export function useCart() {
  return useContext(CartStateContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
