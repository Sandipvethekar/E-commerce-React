import React from 'react'

const ProductsReducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };
    
        case "API_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true,
            };

        case "SET_API_DATA":
            const featurData = action.payload.filter((curElm) => {
                return curElm.featured === true;
            });
            return {
                ...state,
                isLoading: false,
                Products: action.payload,
                featureProducts: featurData
            };
        case "SET_SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading: true,
            };
        case "SET_SINGLE_DATA":
            return {
                ...state,
                isSingleLoading: false,
                singleProduct: action.payload,
            };
 
            case "SET_SINGLE_ERROR":
                return {
                    ...state,
                    isSingleLoading: false,
                    isError: true,
                };
    
        default:
            return state

    }
}

export default ProductsReducer