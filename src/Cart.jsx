import React from 'react'
import { useCartContext } from './context/cartContext'
import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import FormatPrice from './FormatPrice';
import { useAuth0 } from '@auth0/auth0-react';

const Cart = () => {
  const { cart, clearCart, total_price, shipping_fee } = useCartContext();
  // console.log(cart);

  const { isAuthenticated, user } = useAuth0();

  if (cart.length === 0) {
    return <div className="">
      <h3>No items in Cart</h3>
    </div>
  }
  return (
    <>
      <div className="container">
        {isAuthenticated && (
          <div className="cart-user-profile">
            <img src={user.profile} alt={user.name} />
            <h3 className="cart-user-name">Hello, {user.name}</h3>
          </div>
        )}
        <div className="cart-heading">
          <p className=''>Item</p>
          <div className="cart-hide">
            <p>Price</p>
          </div>
          <p className=''>Quantity</p>
          <div className="cart-hide">
            <p>Subtotal</p>
          </div>
          <p className=''>Remove</p>
        </div>
        <hr />
        <div className="cart-item">
          {cart.map((currElem) => {
            return <CartItem key={currElem.id} {...currElem} />
          })}
        </div>
        <hr />
        <div className="cart-two-button">
          <NavLink to="/ecommercesite/products">
            <button className="btn btn-primary">
              Continue Shopping
            </button>
          </NavLink>
          <button className='btn btn-danger' onClick={clearCart}> Clear Cart </button>
        </div>
        <div className="order-total-amount">
          <div className="order-total-subtotal">
            <div>
              <p>Subtotal: </p>
              <p><FormatPrice price={total_price} /> </p>
            </div>
            <div>
              <p>Shipping Fee: </p>
              <p><FormatPrice price={shipping_fee} /> </p>
            </div>
            <hr />
            <div>
              <p>Order total: </p>
              <p><FormatPrice price={total_price + shipping_fee} /> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
