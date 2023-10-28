// here i want two carousel cards going through pictures of my projects. 
import { useState } from 'react';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import girlsdesk from '../../assets/girlsdesk.png'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=" card fixed-bottom mb-5 w-50 offset-3 p-5" >
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className='image'
            src={girlsdesk} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>Help Desk Ticket: Front and Back End Project</h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ControlledCarousel

