// import { Card, CardActionArea, CardActions, CardMedia, Typography,CardContent } from '@mui/material'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import React from 'react'
// import CardBtn from './CardBtn'

// const CardComp = () => {
//   const responsive = {
//     desktop: {
//       breakpoint: { max: 3000, min: 1024 },
//       items: 3,
//       slidesToSlide: 3 // optional, default to 1.
//     },
//     tablet: {
//       breakpoint: { max: 1024, min: 464 },
//       items: 2,
//       slidesToSlide: 2 // optional, default to 1.
//     },
//     mobile: {
//       breakpoint: { max: 464, min: 0 },
//       items: 1,
//       slidesToSlide: 1 // optional, default to 1.
//     }
//   };
//   return (
//     <>
//     <Carousel
//   swipeable={false}
//   draggable={false}
//   showDots={true}
//   responsive={responsive}
//   ssr={true} // means to render carousel on server-side.
//   infinite={true}
//   autoPlay={this.props.deviceType !== "mobile" ? true : false}
//   autoPlaySpeed={1000}
//   keyBoardControl={true}
//   customTransition="all .5"
//   transitionDuration={500}
//   containerClass="carousel-container"
//   removeArrowOnDeviceType={["tablet", "mobile"]}
//   deviceType={this.props.deviceType}
//   dotListClass="custom-dot-list-style"
//   itemClass="carousel-item-padding-40-px"
// >
//       <Card sx={{ maxWidth: 345 }}>
//       <CardActionArea>
//         <CardMedia
//           component="img"
//           height="140"
//           image="/static/images/cards/contemplative-reptile.jpg"
//           alt="green iguana"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="div">
//             Lizard
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Lizards are a widespread group of squamate reptiles, with over 6,000
//             species, ranging across all continents except Antarctica
//           </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//        <CardBtn BtnCardName="Buy Now" />
//       </CardActions>
//     </Card>
//   <div>Item 2</div>
//   <div>Item 3</div>
//   <div>Item 4</div>
// </Carousel>;
    
//     </>
//   )
// }

// export default CardComp
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
    <div class="col-6">
    <h2 class="mb-3">Popular Categories </h2>
</div>
<hr />
    <Carousel responsive={responsive}>
{productData.map((value,index)=>(
    <Grid item  >
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
      </Grid>
    ))}
    </Carousel>
    </>
  )
}

export default CardComp;
