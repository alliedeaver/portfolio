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
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>
            <a href='https://github.com/Vannasaur/girls-help-desk' target='blank'>Help Desk Ticket: Front and Back End </a>
             </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='image'
            src={jateService} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'><a href='https://tranquil-lake-11944-986a08e2cfd8.herokuapp.com/' target='blank'>Jate Text Editor: Front and Back End </a> 
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        
        <Carousel.Item>
          <img className='image'
            src={pokematch} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'><a href='https://github.com/KrystianKowalak/poke-match#deployed-website-link' target='blank'> Pokématch: Front and Back End </a>
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='image'
            src={scheduler} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'><a href='https://alliedeaver.github.io/calendar-challenge-5/' target='blank'> Work Day Scheduler: Front and Back End</a> 
            </h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className='image'
            src={weatherApp} text="First slide" />
          <Carousel.Caption className='fixed bottom'>
            <h3 className='titlePic1 text-dark fw-bold w-100 h-20'>
            <a href='https://github.com/alliedeaver/Check-the-Weather' target='blank'>Weather Application: Front and Back End </a> 
              </h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ControlledCarousel

