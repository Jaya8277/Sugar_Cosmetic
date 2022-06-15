import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
export const Carouselitem = ({carousel,mt}) => {
  return (<>
    <Carousel style={{marginTop:mt}}>
      {carousel.map(elem=>(
      <Carousel.Item interval={3000}>
        <img className="d-block w-100" src={elem} alt="First slide" />
      </Carousel.Item>
      ))}
    </Carousel>
  </>)
}

