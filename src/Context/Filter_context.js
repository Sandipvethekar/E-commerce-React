
import { createContext, useContext, useReducer, useEffect } from "react";
import { useProductContext } from "./productcontact";
import reducer from "../Reducer/FilterReducer";
import { type } from "@testing-library/user-event/dist/type";

const FilterContext = createContext();

const initialState = {
  filter_products: [],
  all_products: [],
  grid_view: true,
  sorting_value: "lowest",
  filters: {
    text: "",
  }
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
  const sorting = (event) => {
    const userValue = event.target.value;
    return dispatch({ type: "GET_SORT_VALUE", payload: userValue });
  }

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  }

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
    dispatch({ type: "SORTING_PRODUCTS" });
  }, [state.sorting_value, state.filters]);


  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: Products });
  }, [Products]);

  return (
    <FilterContext.Provider
      value={{ ...state, setGridView, setListView, sorting, updateFilterValue }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  return useContext(FilterContext);
};
