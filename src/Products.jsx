import React from 'react'
import FilterSection from "./FilterSection"
import SortItems from "./SortItems"
import ProductList from "./ProductList"
import { useFilterContext } from './context/filterContext'
const Products = () => {
  
  return (
    <>
      <div className=" productsPageSection row">
        <div className="leftMenu col-lg-3 col-md-3">
          <FilterSection />
        </div>
        <div className="productItems col-lg-9 col-md-9">
          <div className="sort-filter">
            <SortItems />
          </div>
          <div className="main-data">
            <ProductList/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Products
