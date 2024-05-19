import React from 'react'
import Carousel from '../carousel/Carousel'
import CardComp from './Card/CardComp'
import { Container, Grid } from '@mui/material'
import Brand from './brands/Brand'
import NavBtn from '../header/NavBtn'
import BtnComp from '../reusable/BtnComp'
import CustomCard from './customcards/CustomCard'
import Shiping from './shipingDetail/Shiping'

const Home = () => {
  document.title = "Home";
  return (
    <>
      <Carousel />
      <div className="container my-5">
        <CardComp />
      </div>
      <hr />

      <div className="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center  border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">Your Feet Deserve <span className="text-body-secondary">The Best.</span></h1>
            <p className="lead">Some great placeholder content for the first featurette here. Imagine some exciting prose here..</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <BtnComp variant="contained" BtnName="Shop Now" />
              <BtnComp variant="outlined" BtnName="Category" />
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 overflow-hidden  align-items-center">
            <img className="rounded-lg-3 img-section" src="shoesImages/12.png" alt="" width="400" />
          </div>
        </div>
      </div>
      <div className="container px-4 py-5" id="custom-cards">
    <h2 className="pb-2 border-bottom">Need Ideas</h2>
<div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <CustomCard imagePath="shoesImages/3.png" />
          <CustomCard imagePath="shoesImages/2.png" />
          <CustomCard imagePath="shoesImages/5.png" />
    </div>
    <div className="w-100 d-flex justify-content-center">
          <BtnComp  variant="contained" BtnName="more Ideas" />
        </div>
  </div>
      <div className="container">
        <Brand />
        <div className="w-100 d-flex justify-content-center">
          <BtnComp  variant="contained" BtnName="more brands" />
        </div>
      </div>
      <Shiping/>
    </>
  )
}

export default Home