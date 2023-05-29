import React, { useContext } from 'react'
import HeroSection from './HeroSection'
import { AppContext, useProductContext } from './context/productContext'

const About = () => {
  // const myName = useContext(AppContext);
  // const {myName} = useContext(AppContext);
  const myName = useProductContext;

  
  return (
    <>
      {/* {myName} */}
      <HeroSection
        name="Ritesh's Ecommerce"
      />  
    </>
  )
}

export default About
