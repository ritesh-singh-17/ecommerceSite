import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductContext } from './context/productContext';
import PageNavigation from './PageNavigation';
import MyImage from './MyImage';
import FormatPrice from "./FormatPrice"
import { TbTruckDelivery, TbReplace } from "react-icons/tb"
import { MdSecurity } from "react-icons/md"
import Star from './Star';
import AddToCart from './AddToCart';

const API = "https://api.pujakaitem.com/api/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();
  // console.log(id);
  // console.log(singleProduct);

  const { name, image, company, price, description, category, stock, stars, reviews } = singleProduct;
  console.log(image);
  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  if (isSingleLoading) {
    return (
      <>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <PageNavigation title={name} />
      <div className="productInfoSection">
        <div className="product-img-and-data row">
          {/* producctImage */}
          <div className="product-images col-lg-6 col-md-6 col-sm-12 col-12">
            <MyImage imgs={image} />
          </div>

          {/* product data */}
          <div className="product-data col-lg-6 col-md-6 col-sm-12 col-12">
            <h2>{name}</h2>
            <Star stars={stars} reviews={reviews} />
            <p className="product-data-price">
              MRP: <del><FormatPrice price={price + 250000} /> </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>
              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>10 Days Replacement </p>
              </div>
              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 years warranty</p>
              </div>
            </div>
            <div className="product-stock-data-info">
              <p>Available :
                <span>{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                Brand: <span> {company} </span>
              </p>
            </div>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProduct
