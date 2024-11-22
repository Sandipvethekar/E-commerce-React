
import { createContext, useContext, useReducer } from "react";
import reducer from "../Reducer/cart_Reducer"
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    cart: [],
    cart_amount: "",
    cart_total: "",
    shipping_fee: 5000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  }

  return (
    <CartContext.Provider

      value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  )

};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext }; 