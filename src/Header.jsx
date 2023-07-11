import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FiShoppingCart } from "react-icons/fi"
import { CgMenu, CgClose } from "react-icons/cg"
import { useCartContext } from './context/cartContext'
import { useAuth0 } from '@auth0/auth0-react'

const Header = () => {
  const [btnstate, setBtnState] = useState(true);
  const { total_item } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/ecommercesite">
            <h1>Ritesh's Store</h1>
          </NavLink>
          <button className="navbar-toggler" onClick={() => { setBtnState(!btnstate) }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            {btnstate ?
              <CgMenu className='toggleIcon' /> :
              <CgClose className='toggleIcon' />
            }
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navbar-lists">
              <li className="nav-item">
                <NavLink className="nav-link" to="/ecommercesite">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ecommercesite/about">About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ecommercesite/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ecommercesite/contact">Contacts</NavLink>
              </li>
              <li className="nav-item">
                {isAuthenticated && <h6 className='m-0'>{user.name}</h6>}
              </li>

              {!isAuthenticated ?
                <li>
                  <button className='btn btn-outline-primary' onClick={() => loginWithRedirect()}>Log In</button>
                </li>
                :
                <li>
                  <button className='btn btn-outline-primary' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
                </li>
              }
              <li className="nav-item">
                <NavLink className="nav-link cartIcon" to="/ecommercesite/cart">
                  <FiShoppingCart className="cartTrolley" />
                  <div className="cartTotalItems">
                    <span>{total_item}</span>
                  </div>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
