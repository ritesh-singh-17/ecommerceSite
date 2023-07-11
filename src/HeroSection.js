import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = (props) => {
    return (
        <>
            <div className="cont d-flex">
                <div className="homeitems col-lg-1 col-md-0 col-sm-0 col-0"></div>
                <div className="homeitems col-lg-5 col-md-6 col-sm-12 col-12">
                    <div className="homeitems1">
                        <p className="intro-data">Welcome to</p>
                        <h1>{props.name}</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum quae necessitatibus possimus dignissimos rem, vel, excepturi aliquid vitae asperiores sint odit nulla aperiam illum aut!</p>
                        <NavLink to="/ecommercesite/products">
                            <button className="btn btn-primary">Shop Now</button>
                        </NavLink>
                    </div>
                </div>
                {/* <div className="homeitems col-lg-1 col-md-0 col-sm-0 col-0"></div> */}
                <div className="homeitems homeImage col-lg-5 col-md-6 col-sm-12 col-12">
                    <div className="homeImage1">
                        <img className='img-fluid photoimg' src="images/hero.jpg" alt="home-img" />
                        <div className="photobg "></div>
                    </div>
                </div>
                <div className="homeitems col-lg-1 col-md-0 col-sm-0 col-0"></div>
            </div>
        </>
    )
}

export default HeroSection
