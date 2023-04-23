import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from "../assets/slider/1.png"
import img2 from "../assets/slider/2.png"
import img3 from "../assets/slider/3.png"
import img4 from "../assets/slider/4.png"
import img5 from "../assets/slider/5.png"
import img6 from "../assets/slider/6.png"
import img7 from "../assets/slider/7.png"
import img8 from "../assets/slider/8.png"
import img9 from "../assets/slider/9.png"

function ImageSlider() {
  return (
    <Carousel showThumbs={false} className="slider" interval={3000} infiniteLoop={true} showStatus={false}>

      <div>
        <img src={img1} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img2} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img3} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img4} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img5} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img6} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img7} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img8} alt="Imagen 1" className='slider-img' />
      </div>
      <div>
        <img src={img9} alt="Imagen 1" className='slider-img' />
      </div>
    </Carousel>
  );
}

export default ImageSlider;