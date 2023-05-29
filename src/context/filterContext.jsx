import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();
const intitialState = {
    filter_products: [],
    all_products: [],
    grid_view:true,
    sorting_value: "lowest",
    filters: {
        text: "",
        category: "All",
        company: "All",
        color: "All",
        maxPrice:0,
        price:0,
        minPrice: 0,
    }
}

const FilterContextProvider = ({ children }) => {

    const {products}=useProductContext();
    const [state, dispatch]= useReducer(reducer, intitialState);

    //to set the grid view
    const setGridView = () => {
        return dispatch({type: "SET_GRID_VIEW"})
    }
    //to set the list view
    const setListView = () => {
        return dispatch({type: "SET_LIST_VIEW"})
    }

    //sorting funtion
    // const sorting = () => {
    //     dispatch({type: "GET_SORT_VALUE"});
    // }
    const sorting = (event) => {
        let userValue=event.target.value;
        dispatch({type: "GET_SORT_VALUE",payload: userValue});
    }

    // update the filter value
    const updateFilterValue = (event) => {
        let name=event.target.name;
        let value=event.target.value;
        return dispatch({type: "UPDATE_FILTER_VALUE", payload: {name,value}})
    }

    // to clear  the filters
    const clearFilters = () => {
        dispatch({type: "CLEAR_FILTERS"})
    }


    //to sort the product
    useEffect(()=>{
        dispatch({type: "FILTER_PRODUCTS"})
        // dispatch({type: "SORTING_PRODUCTS", payload: products})
        dispatch({type: "SORTING_PRODUCTS"})
    },[products,state.sorting_value,state.filters])

    useEffect(()=>{
        dispatch({type: "LOAD_FILTER_PRODUCTS", payload: products})
    },[products])

    return (
        <FilterContext.Provider value={{ ...state, setGridView, setListView, sorting, updateFilterValue, clearFilters }}>
            {children}
        </FilterContext.Provider>
    )
}

const useFilterContext = () =>{
    return useContext(FilterContext);
}

export {FilterContext, FilterContextProvider, useFilterContext};
