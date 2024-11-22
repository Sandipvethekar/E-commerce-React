
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../Reducer/cart_Reducer"

const CartContext = createContext();
 const getLocalCartData = ()=> {
    const cartData =localStorage.getItem("CartData")
    if (!cartData || cartData === "[]") {
      return [];
  }

  try {
      return JSON.parse(cartData);
  } catch (error) {
      console.error("Error parsing cart data from localStorage", error);
      return [];
  }
 }
const CartProvider = ({ children }) => {
  const initialState = {
    // cart:[],
    cart:getLocalCartData(),
    cart_amount: "",
    cart_total: "",
    shipping_fee: 5000,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem =(id)=>{
    dispatch({type:"REMOVE_ITEM", payload:{id}});
  };
 
  //  const clearCart =()=>{
  //   dispatch({type:"CLEAR_CART"});
  //  }
  // add data in lical storage
  useEffect(()=>{
     localStorage.setItem("CartData", JSON.stringify(state.cart))
  },[state.cart])
  return (
    <CartContext.Provider

      value={{ ...state, addToCart,removeItem }}>
      {children}
    </CartContext.Provider>
  )

};

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext }; 