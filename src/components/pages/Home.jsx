import React from 'react'
import Carousel from '../carousel/Carousel'
import CardComp from './Card/CardComp'
import { Container, Grid } from '@mui/material'

const Home = () => {
  return (
    <>
      <Carousel/>
      <Container className='my-5'>
           <CardComp/>
      </Container>
    </>
  )
}

export default Home