import React from 'react'
import Product from './Product'

const GridView = ({ products }) => {
    return (
        <>
            <div className="row m-0 gridViewItems">
                {products.map((currElem) => {
                    return <Product key={currElem.id} {...currElem} />
                })}
            </div>
        </>
    )
}

export default GridView
