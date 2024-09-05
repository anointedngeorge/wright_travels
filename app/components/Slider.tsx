"use client"
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "../slider.globals.css";
import Image from 'next/image';


const Slider = () => {
  return (
    <Splide aria-label="My Favorite Images" options={{
        type   : 'loop',
        padding: '25%',
        gap:'15px',
        cover:true,
        height:'400px',
        lazyLoad:'nearby'
    }}>
        {/*  */}
        <SplideSlide className="relative">
            <Image src={'/../images/e4.jpg'} fill={true} alt='...'/>
        </SplideSlide >
        <SplideSlide className="relative">
            <Image src={'/../images/e5.jpg'} fill={true} alt='...'/>
        </SplideSlide >
        <SplideSlide className="relative">
            <Image src={'/../images/e6.jpg'} fill={true} alt='...'/>
        </SplideSlide >
    </Splide>
  )
}

export default Slider
