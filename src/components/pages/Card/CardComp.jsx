import { Card, CardActionArea, CardActions, CardMedia, Typography, CardContent, Grid, Rating } from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useContext } from 'react'
import CardBtn from './CardBtn'
import { productData } from '../../../productData';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/Context';

const CardComp = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate()
  const btnDetail = (product) => {
    navigate(`/products/${product.id}`, { state: { product } });
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      <div className="col-6">
        <h2 className="mb-3">Popular Categories </h2>
      </div>

      <Carousel responsive={responsive}>
        {productData.map((value, index) => (
          <Card key={index} className='mx-2' sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                className='card-img-css'
                height="140"
                image={value.imagePath}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {value.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {value.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {value.desc}
                </Typography>
              </CardContent>
            </CardActionArea>
            <Rating value={value.rating} precision={0.5} readOnly />
            <CardActions>
              <CardBtn onClick={() => btnDetail(value)} BtnCardName={value.BtnText} />
              <CardBtn onClick={() => addToCart(value)} BtnCardName={value.BtnAdd} />
            </CardActions>
          </Card>
        ))}
      </Carousel>
    </>
  )
}

export default CardComp;
