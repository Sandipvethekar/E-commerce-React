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

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      const userSortValue = document.getElementById("sort");
      const sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      console.log(sort_value);
      return {

        ...state,
        sorting_value: sort_value
      };

    case "SORTING_PRODUCTS":
      let newSortData;
      let temSortProduct = [...action.payload];

      if (state.sorting_value === "lowest") {
          const  sortingProducts = (a,b) => {
            return a.price - b.price;
          };
          newSortData = temSortProduct.sort(sortingProducts);
      }
      if (state.sorting_value === "highest") {
        const  sortingProducts = (a,b) => {
          return b.price - a.price;
        };
        newSortData = temSortProduct.sort(sortingProducts);
    }

      if (state.sorting_value === "a-z") {
        newSortData = temSortProduct.sort((a, b) =>
          a.name.localeCompare(b.name)
        )
      }
      if (state.sorting_value === "z-a") {
        newSortData = temSortProduct.sort((a, b) =>
          b.name.localeCompare(a.name)
        )
      }
      return {
        ...state,
        filter_products: newSortData,
      };

    default:
      return state;
  }
};

export default filterReducer;