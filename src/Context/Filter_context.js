
import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontact";
import reducer from "../Reducer/FilterReducer";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
};

export const FilterContextProvider = ({ children }) => {
  const { Products } = useProductContext();
// console.log("filter", Products);
  const [state, dispatch] = useReducer(reducer, initialState);

  // to set the grid view
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

   // to set the grid view
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };
 // sorting function
  const sorting = ()=>{
    return dispatch({ type: "GET_SORT_VALUE" });
  }
  useEffect(() => {
    dispatch({ type: "SORTING_PRODUCTS", payload: Products });
  }, [state.sorting_value]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: Products });
  }, [Products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView ,setListView,sorting }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
