import React from 'react'
import FormatPrice from './FormatPrice';
import { NavLink } from 'react-router-dom';

const ListView = ({ products }) => {
    return (
        <>
            <div className="listViewItems">
                {products.map((currElem) => {
                    const { id, name, image, price, description } = currElem;
                    return (
                        <>
                            <div className="card">
                                <div className="row m-0">
                                    <div className="cardImageDiv col-lg-5 col-md-6 col-sm-12 col-12">
                                        <img className='img-fluid card-image' src={image} alt={name} />
                                    </div>
                                    <div className="card-data col-lg-7 col-md-6 col-sm-12 col-12">
                                        <h3>{name}</h3>
                                        <p className="card-data-price">
                                            <FormatPrice price={price} />
                                        </p>
                                        <p>{description.slice(0, 90)}.....</p>
                                        <NavLink to={`/singleproduct/${id}`}>
                                            <button className="btn btn-primary mb-2">Read More</button>
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ListView
