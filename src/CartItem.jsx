import React from 'react'
import FormatPrice from "./FormatPrice";
import AddToCartAmountToggle from './AddToCartAmountToggle';
import { FaTrash } from 'react-icons/fa';
import { useCartContext } from './context/cartContext';

const CartItem = ({ id, name, image, color, price, amount }) => {

    const {removeItem, setIncrease, setDecrease} = useCartContext();

    // const setDecrease = () => {
    //     // amount>1 ? setAmount(amount - 1) : setAmount(1);
    // }
    // const setIncrease = () => {
    //     // amount<stock ? setAmount(amount+1) : setAmount(stock);
    // }
    return (
        <>
            <div className="cart-heading">
                <div className="cart-image-name">
                    <div>
                        <img className='img-fluid cart-image' src={image} alt={id} />
                    </div>
                    <div className='colorDiv'>
                        <p>{name}</p>
                        <div className="color-div">
                            <p>Color : </p>
                            <div className="color-style" style={{ backgroundColor: color}}>
                            </div>
                        </div>
                    </div>
                </div>
                {/* for price */}
                <div className="cart-hide">
                    <p> <FormatPrice price={price} /> </p>
                </div>
                {/* for quantities */}
                <div className='amountAndRemove'>
                    <AddToCartAmountToggle amount={amount} setDecrease={() => setDecrease(id)} setIncrease={() => setIncrease(id)} />
                </div>
                {/* for subtotal */}
                <div className="cart-hide">
                    <p><FormatPrice price={price*amount}/></p>
                </div>

                <div className='amountAndRemove'>
                    <FaTrash className='remove-icon' onClick={()=> removeItem(id)}/>
                </div>
            </div>
        </>
    )
}

export default CartItem
