"use client";
import Image from 'next/image';
import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import "../slider.globals.css";

interface SliderItems {
  content: string;
  name: string;
  image: string;
}

const Sliders: React.FC<SliderItems> = ({ content, name, image }) => {
  return (
    <div className="h-full bg-main-brown rounded-lg p-4 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <div className='w-full sm:w-2/3 h-60 sm:h-96 relative rounded-lg overflow-hidden'>
          <Image
            src={image}
            alt="Person"
            fill={true}
            className="object-cover w-full h-full"
          />
        </div>
        <div className='w-full sm:w-1/2 text-center py-4 sm:py-10 px-2 sm:px-4'>
          <p className="mb-4 text-main-white text-sm sm:text-base lg:text-lg">
            {content}
          </p>
          <h3 className="font-semibold font-pop text-main-yellow text-base sm:text-lg lg:text-xl">{name}</h3>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const content: SliderItems[] = [
    {
      name: 'Ronald Doph',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt animi. Velit iste quas minima molestiae atque? Sapiente sequi molestias porro sed reprehenderit.",
      image: '/images/e6.jpg',
    },
    {
      name: 'Mikel Tyson',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt animi. Velit iste quas minima molestiae atque? Sapiente sequi molestias porro sed reprehenderit.",
      image: '/images/e5.jpg',
    },
    {
      name: 'Ambrose Edit',
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt animi. Velit iste quas minima molestiae atque? Sapiente sequi molestias porro sed reprehenderit.",
      image: '/images/e4.jpg',
    },
  ];

  return (
    <div className="w-full py-10 sm:py-5 bg-main relative mb-10 sm:mb-16 bg-main-red">
      <div className='text-center mb-8 sm:mb-10'>
        <h3 className='text-2xl sm:text-4xl font-pop font-semibold text-main-white'>
          What People Say About Us
        </h3>
      </div>
      
      <div className="relative w-full max-w-3xl lg:max-w-5xl mx-auto overflow-hidden px-4 sm:px-0">
        <Splide
          aria-label="Testimonials"
          options={{
            type: 'loop',
            padding: '10%',
            gap: '10px',
            cover: true,
            height: 'auto',
            perPage: 1,
            perMove: 1,
            breakpoints: {
              640: {
                padding: '5%',
                gap: '5px',
                height: 'auto',
              },
              1024: {
                padding: '15%',
                gap: '10px',
              },
            },
            classes: {
              arrow: 'splide__arrow rounded-full bg-main-yellow p-2 sm:p-3',
              page: 'splide__pagination__page bg-main-yellow text-main-black',
            },
          }}
        >
          {content.map((item, index) => (
            <SplideSlide key={index}>
              <Sliders content={item.content} image={item.image} name={item.name} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Testimonials;
