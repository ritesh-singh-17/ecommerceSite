import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = (props) => {
  return (
    <>
        <div className="pageNavigationBar">
            <NavLink className=" text-decoration-none" to="/ecommercesite">Home</NavLink>/{props.title}
        </div>
    </>
  )
}

export default PageNavigation
