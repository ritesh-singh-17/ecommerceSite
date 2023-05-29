import { createContext, useContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import reducer from "../reducer/productReducer"

const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    singleProduct: {},
}

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(url);
            // console.log(res);
            const products = await res.data;
            // console.log(products);
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    //api call for single product
    const getSingleProduct = async (url) =>{
        dispatch({ type: "SET_SINGLE_LOADING" })
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({ type: "SET_SINGLE_API_DATA", payload: singleProduct })
        }
        catch (error) {
            dispatch({ type: "SINGLE_API_ERROR" })
        }
    }


    useEffect(() => {
        getProducts(API);
    }, []);

    return (
        <>
            <AppContext.Provider value={{ ...state, getSingleProduct }}>{children}</AppContext.Provider>


            {/* <AppContext.Provider value="ritesh">{children}</AppContext.Provider> */}
            {/* <AppContext.Provider value={{myName: "ritesh"}}>{children}</AppContext.Provider> */}
        </>
    )
};

//custom hooks
const useProductContext = () => {
    return useContext(AppContext);
}

export { AppProvider, AppContext, useProductContext };