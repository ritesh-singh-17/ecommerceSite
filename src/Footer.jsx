import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaInstagram, FaFacebook } from "react-icons/fa";
const Footer = () => {
    return (
        <>
            <div className="footer-section">
                <div className="contact-short">
                    <div className="contact-short1">
                        <div>
                            <h5>Ready to get started</h5>
                            <h5>Talk to us today</h5>
                        </div>
                        <div>
                            <NavLink to="/ecommercesite/contact">
                                <button className='btn btn-primary'>Get Started</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

                <footer>
                    <div className="row m-0 footerSection1">
                        <div className="footer-items footer-about col-lg-3 col-md-6 col-sm-12 col-12">
                            <h5>Ritesh Singh</h5>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className="footer-items footer-subscribe col-lg-4 col-md-6 col-sm-12 col-12">
                            <h5>Subscribe to get important updates</h5>
                            <form action="#">
                                <input type="email" placeholder='Enter your email' />
                                <input className='submitbtn' type="submit" value="Subscribe" />
                            </form>
                        </div>
                        <div className="footer-items footer-social col-lg-2 col-md-6 col-sm-6 col-6">
                            <h5>Follow Us</h5>
                            <div className="footer-social-icons">
                                <FaInstagram className="icons" />
                                <FaFacebook className="icons" />
                            </div>
                        </div>
                        <div className="footer-items footer-contact col-lg-3 col-md-6 col-sm-6 col-6">
                            <h5>Call Us</h5>
                            {/* <a href="tel:1234567892"> + 91 1234567892 </a> */}
                            <h6>+91 1234567892</h6>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <hr />
                    <p className="m-0">@{new Date().getFullYear()} RiteshSingh. All Rights Reserved</p>
                </div>
            </div>
        </>
    )
}

export default Footer
