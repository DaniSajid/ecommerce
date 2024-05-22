import { Card, CardActionArea, CardMedia } from '@mui/material';
import React from 'react'

const About = () => {
  document.title = "About";

  return (
    <>
    <div className="css-top">
      <h1 className="display-5 fw-normal bg-body-tertiary text-center text-body-emphasis ">About</h1>
      </div>
    <div className="container">
<div className="pricing-header  pb-md-4 mx-auto text-center">
      <h2 className=" fw-normal text-body-emphasis">Our Vision</h2>
      <p className="fs-6 text-body-secondary">We envision a world where everyone can express their unique personality through the shoes they wear, without sacrificing comfort. Our curated collections cater to diverse tastes and occasions, ensuring that every customer finds their perfect pair. From classic styles to contemporary trends, we strive to be at the forefront of fashion while maintaining our commitment to quality.</p>
    </div>
  <div className="container text-center">
  <div className="row gx-3 gy-3">
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image="about/about1.jpg"
          alt="about"
          className='img-about-css'
        />
      </CardActionArea>
    </Card>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image="about/about2.png"
          alt="about"
          className='img-about-css'
        />
      </CardActionArea>
    </Card>
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 ">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image="about/about1.jpg"
          alt="about"
          className='img-about-css'
        />
      </CardActionArea>
    </Card>
    </div>
  </div>
</div>
<div className="pricing-header  pb-md-4 mx-auto my-4">
      <h2 className="fw-normal text-body-emphasis">Our Story</h2>
      <p className="fs-6 text-body-secondary">At TrendyTreads, we believe that every step you take should be a statement of style and comfort. Our journey began in 2023 with a simple yet ambitious mission: to revolutionize the footwear industry by offering shoes that blend impeccable design with unparalleled comfort. Whether you're navigating city streets, attending a special event, or enjoying a casual day out, our shoes are designed to accompany you with elegance and ease.</p>
      <h2 className="fw-normal text-body-emphasis">Our Commitment to Quality</h2>
      <p className="fs-6 text-body-secondary">Quality is at the heart of everything we do at TrendyTreads. We meticulously source the finest materials from around the globe, ensuring that every pair of shoes meets our high standards. Our skilled artisans combine traditional craftsmanship with modern techniques to create footwear that is not only beautiful but also durable and comfortable.</p>
    </div>
    <div className="container">
  <div className="row gx-5">
    <div className="col-xl-6 col-lg-6 col-md-6 col">
      <h4>Join Us on Our Journey</h4>
      <p className="fs-6 text-body-secondary">We invite you to join the TrendyTreads family and embark on a journey of style and comfort. Whether you're a long-time shoe aficionado or someone seeking the perfect pair for a special occasion, we're here to help you find shoes that you'll love.</p>
      <h4>Stay Connected</h4>
      <p className="fs-6 text-body-secondary">Stay updated with the latest trends, exclusive offers, and behind-the-scenes content by following us on social media and subscribing to our newsletter. Let's walk together towards a stylish future.</p>
    </div>
    <div className="col-xl-6 col-lg-6 col-md-6 col">
      <h4>Contact Us</h4>
      <ul>
        <li>Pakistan ,Karachi</li>
        <li>+923272153650</li>
        <li>daniyalsajid128@gmail.com</li>
      </ul>
    </div>
  </div>
</div>
</div>
    </>
  )
}

export default About