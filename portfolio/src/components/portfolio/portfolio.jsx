// here i want two carousel cards going through pictures of my projects. 

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import screenshot from '../../assets/screenshot.png'
function Portfolio() {

  return (
    <body className="card fixed-bottom mb-5 w-50 offset-3 p-5" >
      <Carousel>
        <Carousel.Item>
          <img
            src={screenshot} text="First slide">
          </img>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
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
    </body>
  )
}

export default Portfolio

