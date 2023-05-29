const ProductReducer = (state, action) =>{
    if(action.type === "SET_LOADING"){
        return {
            ...state,
            isLoading: true,
        }
    }
    if(action.type === "SET_API_DATA"){
        const featureData = action.payload.filter((currElem)=>{
            return currElem.featured===true;
        })
        return{
            ...state,
            isLoading:false,
            products: action.payload,
            featureProducts: featureData,
        }
    }
    if(action.type === "API_ERROR"){
        return {
            ...state,
            isLoading: false,
            isError: true
        }
    }
    if(action.type === "SET_SINGLE_LOADING"){
        return {
            ...state,
            isSingleLoading: true,
        }
    }
    if(action.type === "SET_SINGLE_API_DATA"){
        return{
            ...state,
            isSingleLoading:false,
            singleProduct: action.payload,
        }
    }
    if(action.type === "SINGLE_API_ERROR"){
        return {
            ...state,
            isSingleLoading: false,
            isError: true
        }
    }
    return state;
}

export default ProductReducer;