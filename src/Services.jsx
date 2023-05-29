import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="serv1 col-lg-3 col-md-4 col-sm-12 col-12">
          <div className="serviceDiv1">
            <TbTruckDelivery className="serviceIcons" />
            <h6>Super Fast and Free Delivery</h6>
          </div>
        </div>
        <div className="serv1 col-lg-3 col-md-4 col-sm-12 col-12">
          <div className="serviceDiv2">
            <MdSecurity className="serviceIcons" />
            <h6>Non-contact shipping</h6>
          </div>
          <div className="serviceDiv2">
            <GiReceiveMoney className="serviceIcons" />
            <h6>Money-back Guarantee</h6>
          </div>
        </div>
        <div className="serv1 col-lg-3 col-md-4 col-sm-12 col-12">
        <div className="serviceDiv1">
            <RiSecurePaymentLine className="serviceIcons" />
            <h6>Super Secure Payment System</h6>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
