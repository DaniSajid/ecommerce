import { Card, CardActionArea, CardActions, CardMedia, Typography, CardContent, Grid } from '@mui/material'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from 'react'
import CardBtn from './CardBtn'
import { productData } from '../../../productData';

const CardComp = () => {
  

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
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
{productData.map((value,index)=>(
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
        <CardActions>
          <CardBtn BtnCardName={value.BtnText} />
        </CardActions>
      </Card>
    ))}
    </Carousel>
    </>
  )
}

export default CardComp;
