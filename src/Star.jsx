import React from 'react'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";

const Star = ({ stars, reviews }) => {
    const ratingStar = Array.from({ length: 5 }, (elem, index) => {
        let number = index + 0.5;
        return (
            <span key={index}>
                {
                    stars >= (index + 1)
                        ? (<FaStar className='starIcon' />)
                        : stars >= number ? (<FaStarHalfAlt className='starIcon' />)
                            : <AiOutlineStar className='starIcon' />
                }
            </span>
        )
    })
    return (
        <>
            <div className="star-icon-style">
                <div>
                    {ratingStar}
                </div>
                <p>({reviews} customer reviews)</p>
            </div>
        </>
    )
}

export default Star
