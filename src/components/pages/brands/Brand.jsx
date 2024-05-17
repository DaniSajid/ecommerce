import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { BrandData } from '../../../productData';

const Brand = (props) => {
    const { deviceType } = props;
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <>
            <div className="container">
                <h2 className="text-center">Our Brands</h2>
            </div>
            <Carousel
                swipeable={false}
                draggable={false}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={deviceType !== "mobile" ? true : false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
            {BrandData.map((value,index)=>(
                <Card className='mx-2 my-4' key={index} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          className='img-brand'
          image={value.imagePath}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {value.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
        
           
            ))}
            </Carousel>;     
        </>
    )
}

export default Brand;
