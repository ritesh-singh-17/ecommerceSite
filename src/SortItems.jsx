import React from 'react'
import {BsFillGridFill, BsList} from "react-icons/bs" 
import {useFilterContext} from "./context/filterContext";
const SortItems = () => {
  const {grid_view, setGridView, setListView, filter_products, sorting}=useFilterContext();
  return (
    <>
      <div className="sort-section">
        <div className="d-flex sorting-list-buttons">
          <button onClick={setGridView} className={grid_view ? 'sorting-list-icon active' : 'sorting-list-icon'}><BsFillGridFill classname="sortinglisticon"/></button>
          <button onClick={setListView} className={!grid_view ? 'sorting-list-icon active' : 'sorting-list-icon'}><BsList classname="sortinglisticon"/></button>
        </div>
        <div className="productAvailabilityData">
          <p classname="m-0">{filter_products.length} Products Available</p>
        </div>
        <div className="sort-selection">
          <form action="#">
            <label htmlFor="sort"></label>
            <select name="sort" id="sort" className='sort-selection-style' onClick={sorting}>
              <option value="lowest">Price(Lowest)</option>
              <option value="highest">Price(Highest)</option>
              <option value="a-z">Price(a-z)</option>
              <option value="z-a">Price(z-a)</option>
            </select>
          </form>
        </div>
      </div>
    </>
  )
}

export default SortItems
