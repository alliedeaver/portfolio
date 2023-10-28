// here i want two carousel cards going through pictures of my projects. 
import { useState } from 'react';
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import girlsdesk from '../../assets/girlsdesk.png'
import jateService from '../../assets/jate-service.png'
import pokematch from '../../assets/HomeSS.png'
import  scheduler  from '../../assets/scheduler.png'
import  weatherApp  from '../../assets/weatherapp.png'

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className=" card fixed-bottom mt-2 mb-5 w-50 offset-3 p-5  fst-italic mb-4 " >
      <h3>
        portfolio
      </h3>
        <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className='image'
            src={girlsdesk} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>Help Desk Ticket: Front and Back End </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='image'
            src={jateService} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>Jate Text Editor: Front and Back End </h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className='image'
            src={pokematch} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>Pokématch: Front and Back End </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='image'
            src={scheduler} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>Work Day Scheduler: Front and Back End </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='image'
            src={weatherApp} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>Weather Application: Front and Back End </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ControlledCarousel

