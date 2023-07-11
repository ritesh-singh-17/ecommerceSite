import React, { useState } from 'react'
import { FaCheck } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import AddToCartAmountToggle from './AddToCartAmountToggle';
import { useCartContext } from './context/cartContext';

const AddToCart = ({ product }) => {
    const {addToCart} = useCartContext();
    const { id, colors, stock } = product;
    const [color, setColor] = useState(colors[0]);
    const [amount, setAmount] = useState(1);

    const setDecrease = () => {
        amount>1 ? setAmount(amount - 1) : setAmount(1);
    }
    const setIncrease = () => {
        amount<stock ? setAmount(amount+1) : setAmount(stock);
    }

    return (
        <>
            <div className="colorsSection">
                <p className=' d-flex'>Colors:
                    {colors.map((currColor, index) => {
                        return (
                            <button
                                style={{ backgroundColor: currColor }}
                                key={index}
                                onClick={() => setColor(currColor)}
                                className={color === currColor ? "btnStyle active" : "btnStyle"} >
                                {color === currColor ? <FaCheck /> : null}
                            </button>
                        )
                    })}
                </p>
            </div>
            <AddToCartAmountToggle amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
            <NavLink to="/ecommercesite/cart" onClick={()=> addToCart(id,color,amount,product)}>
                <button className="btn btn-primary">Add To Cart</button>
            </NavLink>
        </>
    )
}

export default AddToCart
