import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'

const AddToCartAmountToggle = ({ amount, setDecrease, setIncrease }) => {
  return (
    <>
      <div className="amount-toggle d-flex">
        <button onClick={() => setDecrease()}><FaMinus /></button>
        <h4 className="m-0 amount-style">{amount}</h4>
        <button onClick={() => setIncrease()}><FaPlus /></button>
      </div>

    </>
  )
}

export default AddToCartAmountToggle
