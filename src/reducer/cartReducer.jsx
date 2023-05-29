const cartReducer = (state, action) => {
    if (action.type === "ADD_TO_CART") {
        let { id, color, amount, product } = action.payload;

        // tackle the existing product
        let existingProduct = state.cart.find((currElem) => currElem.id === id + color)
        if (existingProduct) {
            let upadtedProduct = state.cart.map((currElem) => {
                if (currElem.id === id + color) {
                    let newAmount = currElem.amount + amount;
                    if (newAmount >= currElem.max) {
                        newAmount = currElem.max;
                    }
                    return {
                        ...currElem,
                        amount: newAmount,
                    }
                } else {
                    return currElem;
                }
            })
            return {
                ...state,
                cart: upadtedProduct,
            }
        } else {
            let cartProduct = {
                id: id + color,
                name: product.name,
                color,
                amount,
                image: product.image[0].url,
                price: product.price,
                max: product.stock,
            }

            return {
                ...state,
                cart: [...state.cart, cartProduct],
            }
        }
    }
    if (action.type === "REMOVE_ITEM") {
        let updatedCart = state.cart.filter((currElem) => {
            return currElem.id !== action.payload;
        })
        return {
            ...state,
            cart: updatedCart,
        }
    }
    if (action.type === "CLEAR_CART") {
        return {
            ...state,
            cart: [],
        }
    }
    if (action.type === "SET_DECREMENT") {
        let updatedData = state.cart.map((currElem) => {
            if (currElem.id === action.payload) {
                let decAmount = currElem.amount - 1;
                if (decAmount <= 0) {
                    decAmount = 1;
                }
                return {
                    ...currElem,
                    amount: decAmount,
                }
            } else {
                return currElem
            }
        })
        return {
            ...state,
            cart: updatedData,
        }
    }
    
    // if (action.type === "SET_INCREMENT") {
    //     let updatedData = state.cart.map((currElem) => {
    //         if (currElem.id === action.payload) {
    //             let incAmount = currElem.amount + 1;
    //             if (incAmount > currElem.max) {
    //                 incAmount = currElem.max;
    //             }
    //             return {
    //                 ...currElem,
    //                 amount: incAmount,
    //             }
    //         } else {
    //             return currElem
    //         }
    //     })
    //     return {
    //         ...state,
    //         cart: updatedData,
    //     }
    // }
    if (action.type === "CART_TOTAL_ITEM") {
        let updatedItemVal = state.cart.reduce((initialValue, currValue) => {
            let { amount } = currValue;
            return initialValue;
        }, 0)
        return {
            ...state,
            total_item: updatedItemVal,
        }
    }
    if (action.type === "CART_TOTAL_PRICE") {
        let totalPrice = state.cart.reduce((initialValue, currValue) => {
            let { price, amount } = currValue;
            initialValue = initialValue + (price * amount);
            return initialValue;
        }, 0)
        return {
            ...state,
            total_price: totalPrice,
        }
    }

    // if (action.type === "CART_ITEM_PRICE_TOTAL") {
    //     let { total_item, total_price } = state.cart.reduce(
    //         (initialValue, currValue) => {
    //             let { price, amount } = currValue;
    //             initialValue.total_item = initialValue.total_item + amount;
    //             initialValue.total_price = initialValue.total_price + (price * amount);
    //             return initialValue;
    //         },
    //         {
    //             total_item:0,
    //             total_price:0,
    //         }
    //     )
    //     return{
    //         ...state,
    //         total_item,
    //         total_price,
    //     }
    // }
    
    return state;

}

export default cartReducer
