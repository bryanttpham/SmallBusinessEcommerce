import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import dbook from '../assets/dbook.jpg'; // with import
import dennisr from '../assets/dennisr.jpg'; // with import
import jordan from '../assets/jordan.jpg'; // with import
import kanye from '../assets/kanye.webp'; // with import


const ImageCarousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  let SliderData = [
    {
      image:
        dbook
    },
    {
      image:
      dennisr
    },
    {
      image:
      jordan
    },
    {
      image:
      kanye
    }
  ];
  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
          >
            
            {index === current && (
              <img src={slide.image} alt='travel image' className='image' />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageCarousel;