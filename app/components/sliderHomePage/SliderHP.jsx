"use client"
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the carousel styles
import Image from 'next/image';

function SliderHP() {
  const slides = [
    { path: '/SlideShow/SS1.jpg' },
    { path: '/SlideShow/SS2.jpg' },
  ];

  return (
    <div>
      <Carousel
        showStatus={false}
        transitionTime={600}
        
      >
        {slides.map((slide, index) => ( // Added 'index' for unique key
          <div key={index}>
            <Image
              className='rounded-xl'
              src={slide.path}
              width={150}
              height={200}
              showIndicators={false}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default SliderHP;
