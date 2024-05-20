import React from 'react'

const Carousel = () => {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide my-5">
  <div className="carousel-indicators justify-content-end ">
   <img data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active img-carousel-short" aria-current="true" aria-label="Slide 1" src="shoesImages/12.png"  alt="..."/>
      <img src="shoesImages/11.png" alt="..." data-bs-target="#carouselExampleIndicators" className='img-carousel-short' data-bs-slide-to="1" aria-label="Slide 2" />
      <img src="shoesImages/5.png" alt="..." data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" className='img-carousel-short'/>
    
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="shoesImages/12.png" className="d-block img-css-carousel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="shoesImages/11.png" className="d-block img-css-carousel" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="shoesImages/5.png" className="d-block img-css-carousel" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Carousel