const filterReducer = (state, action) => {
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        const products = Array.isArray(action.payload) ? action.payload : [];
        return {
          ...state,
          filter_products: [...products],
          all_products: [...products],
        };
  
        case "SET_GRID_VIEW":
            return {
              ...state,
              grid_view: true,
            };
      default:
        return state;
    }
  };
  
  export default filterReducer;