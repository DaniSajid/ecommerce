import { Card, CardActionArea, CardMedia } from '@mui/material';
import React from 'react'

const About = () => {
  document.title = "About";

  return (
    <>
      <h1 className="display-5 fw-normal bg-body-tertiary text-center text-body-emphasis my-5 ">About</h1>
    <div className="container">
<div class="pricing-header  pb-md-4 mx-auto text-center">
      <h2 class=" fw-normal text-body-emphasis">Discver the website</h2>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
    </div>
  <div class="container text-center">
  <div class="row gx-3 gy-3">
    <div class="col-xl-4 col-lg-4 col-md-6 col ">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="about/about1.jpg"
          alt="about"
          className='img-about-css'
        />
      </CardActionArea>
    </Card>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col ">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="about/about1.jpg"
          alt="about"
          className='img-about-css'
        />
      </CardActionArea>
    </Card>
    </div>
    <div class="col-xl-4 col-lg-4 col-md-6 col ">
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="about/about1.jpg"
          alt="about"
          className='img-about-css'
        />
      </CardActionArea>
    </Card>
    </div>
  </div>
</div>
<div class="pricing-header  pb-md-4 mx-auto my-4">
      <h2 class="fw-normal text-body-emphasis">Discver the website</h2>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
    </div>
    <div class="container">
  <div class="row gx-5">
    <div class="col-xl-6 col-lg-6 col-md-6 col">
      <h4>About</h4>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
      <p class="fs-6 text-body-secondary">Quickly build an effective pricing table for your potential customers with this Bootstrap example. It’s built with default Bootstrap components and utilities with little customization Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, debitis!</p>
    </div>
    <div class="col-xl-6 col-lg-6 col-md-6 col">
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