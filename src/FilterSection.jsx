import React from 'react'
import { useFilterContext } from './context/filterContext'
import { FaCheck } from "react-icons/fa"
import FormatPrice from "./FormatPrice";

const FilterSection = () => {
  const { filters: { text, category, color, price, maxPrice, minPrice }, updateFilterValue, all_products, clearFilters } = useFilterContext();

  const getUniqueData = (data, property) => {
    let newVal = data.map((currElem) => {
      return currElem[property];
    })
    if (property === "colors") {
      // return newVal = ["All", ...new Set([].concat(...newVal))];
      newVal = newVal.flat();
    }
    // else{
    //   return newVal = ["All", ...new Set(newVal)];
    // }
    return newVal = ["All", ...new Set(newVal)];
  }

  // we need unique data
  const categoryOnlyData = getUniqueData(all_products, "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");
  // console.log(colorsOnlyData);

  return (
    <>
      <div className="filter">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <input type="text" name='text' placeholder='SEARCH' value={text} onChange={updateFilterValue} />
        </form>
      </div>
      <div className="filter">
        <h3>Category</h3>
        <div className='filter-category'>
          {categoryOnlyData.map((currElem, index) => {
            return <button className='btn btn-outline-light p-1' key={index} type='button' name="category" value={currElem} onClick={updateFilterValue}>{currElem}</button>
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" className='filter-company-select' onClick={updateFilterValue}>
            {companyOnlyData.map((currElem, index) => {
              return (
                <option key={index} value={currElem} name="company">{currElem}</option>
              )
            })}
          </select>
        </form>
      </div>
      <div className="filter">
        <h3>Colors</h3>
        <div className="filter-color-style d-flex">
          {colorsOnlyData.map((currColor, index) => {
            if (currColor === "All") {
              return <button className="btn btn-outline-primary p-1 pb-0 pt-0" key={index} type='button' name='color' value={currColor}  onClick={updateFilterValue}>
                All
              </button>
            }
            return <button key={index} type='button' name='color' value={currColor} style={{ backgroundColor: currColor }} className={color === currColor ? "btnStyle active" : "btnStyle"} onClick={updateFilterValue}>
              {color === currColor ? <FaCheck className="checkStyle" /> : null}
            </button>
          })}
        </div>
      </div>
      <div className="filter">
        <h3>Price</h3>
        <p><FormatPrice price={price} /></p>
        <input type="range" min={minPrice} max={maxPrice} value={price} onChange={updateFilterValue} name="price" id="" />
      </div>
      <div className="filter">
        <button className="btn btn-danger"  onClick={clearFilters}>
          CLEAR FILTERS
        </button>
      </div>
    </>
  )
}

export default FilterSection
