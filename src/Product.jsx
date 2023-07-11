import React from 'react'
import { NavLink } from 'react-router-dom';
import FormatPrice from './FormatPrice';

const Product = (props) => {
    const { id, name, image, price, category } = props;
    return (
        <>
            <NavLink className="featureProductItems col-lg-4 col-md-4 col-sm-12 col-12" to={`/ecommercesite/singleproduct/${id}`}>
                <div className="card">
                    <img className='img-fluid card-image ' src={image} alt={name} />
                    <div class="card-img-overlay">
                        <div className='cardCaption1'>
                            <p className="cardCaption">{category}</p>
                        </div>
                    </div>
                    <div className="card-data">
                        <div className="card-data-flex">
                            <h6 className='m-0'>{name}</h6>
                            <p className="card-data-price">
                                <FormatPrice price={price}/>
                            </p>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}

export default Product
