import axios from "axios";
import { createContext,useContext, useEffect, useReducer } from "react";
import   reducer from "../Reducer/productsReducer"
import { type } from "@testing-library/user-event/dist/type";
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const initialState={
        isLoading:false,
        isError:false,
        Products:[],
        featureProducts:[],
        isSingleLoading:false,
        singleProduct:{

        }
    };
    const [state ,dispatch]=useReducer(reducer,initialState);

    //fetch api data with help of axios
    const API = "https://api.pujakaitem.com/api/products";
    

     const getProducts=async(url)=>{
        dispatch({type:"SET_LOADING"});
       try {
        const res = await axios.get(url);
        const products= await res.data;
      
        dispatch({type:"SET_API_DATA", payload:products});
       } catch (error) { 
        dispatch({type:"API_ERROR"});
       }
     };

     const getSingleProduct=async(url)=>{                                                                                                                                                                                                                                                               
        dispatch({type:"SET_SINGLE_LOADING"});
       try {
        const res = await axios.get(url);
        const singleproduct= await res.data;
       
        dispatch({type:"SET_SINGLE_DATA", payload:singleproduct});
       } catch (error) { 
        dispatch({type:"SET_SINGLE_ERROR"});
       }
     };
     //
    useEffect(()=>{
        getProducts(API);
    },[]);
    
    return (
        <AppContext.Provider value={{ ...state,getSingleProduct}}>
            {children}
        </AppContext.Provider>
    );
};
//custom hook 
// const useProductContext=(()=>{
//   return useContext(AppContext);
// });
const useProductContext = () => {
    return useContext(AppContext);
  };
export { AppProvider, AppContext ,useProductContext};
