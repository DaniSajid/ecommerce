import { Rating, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';
import BtnComp from '../../reusable/BtnComp';


const CardDetail = () => {
  document.title = "Product"
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
      <div className="css-top">
        <h1 className="display-5 fw-normal bg-body-tertiary text-center text-body-emphasis ">Product</h1>
      </div>
      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center  border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Your Feet Deserve <span className="text-body-secondary">The Best.</span></h1>
            <h2>{product.name}</h2>
            <Typography variant="body1">{product.desc}</Typography>
            <Typography variant="h5">Price: {product.price}</Typography>
            <Rating value={product.rating} precision={0.5} readOnly />
            <div className="d-grid gap-2 d-md-flex justify-content-md-start my-1 mb-4 mb-lg-3">

              <BtnComp variant="contained" BtnName="Add to Cart" />
              <BtnComp variant="outlined" BtnName="Category" />
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 overflow-hidden  align-items-center">
            <img className="rounded-lg-3 img-section" src={product.imagePath} alt="" width="400" />
          </div>
        </div>
      </div>
    </>
  )
}

export default CardDetail