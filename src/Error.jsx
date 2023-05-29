import React from 'react'
import { NavLink } from 'react-router-dom'
const Error = () => {
  return (
    <>
      <div className="error-page">
        <h1>404</h1>
        <h3>Oh! You're lost</h3>
        <p>
          The page you are looking for does not exist. You can click the button below to go back to the homepage
        </p>
        <NavLink to="/">
          <button className="btn btn-primary">
            Home
          </button>
        </NavLink>
      </div>
    </>
  )
}

export default Error
