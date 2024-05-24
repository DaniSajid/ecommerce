import { Rating, Typography } from '@mui/material';
import React from 'react'
import { useLocation } from 'react-router-dom';

const CardDetail = () => {
    const location = useLocation();
  const { product } = location.state || {};

  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <>
         <div>
      <Typography variant="h3">{product.name}</Typography>
      <img src={product.imagePath} alt={product.name} />
      <Typography variant="body1">{product.desc}</Typography>
      <Typography variant="h5">Price: {product.price}</Typography>
      <Rating value={product.rating} readOnly />
    </div>
    </>
  )
}

export default CardDetail