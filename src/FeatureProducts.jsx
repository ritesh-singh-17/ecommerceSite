import React from 'react'
import { useProductContext } from './context/productContext'
import Product from './Product';


const FeatureProducts = () => {
    const { isLoading, featureProducts } = useProductContext();
    // if(isLoading){
    //     return <div>.......Loading</div>
    // }
    return (
        <>
            <div className="featureSection">
                
                    <div className="intro-data"> Check Now! </div>
                    <div className="common-heading"><h3>Our Featured Services</h3></div>
                    <div className="row m-0 featureItems">
                        {featureProducts.map((currElem)=>{
                            return <Product key={currElem.id} {...currElem}/>
                        })}
                    </div>
                
            </div>
        </>
    )
}

export default FeatureProducts
