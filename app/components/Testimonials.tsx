"use client"
import Image from 'next/image';
import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "../slider.globals.css";

interface slider_items {
    content:string,
    name:string,
    image:string
}


export const Sliders:React.FC<slider_items> = ({content, name, image}) => {
    return (
        <div className="h-full bg-main-brown rounded-lg">
                
              <div className="flex space-x-2 max-sm:space-x-0">
                <div className='w-2/3 h-96 relative'>
                        <Image
                            src={image}
                            alt="Person"
                            fill={true}
                            className="object-cover w-full h-full"
                        />
                </div>
                <div className='w-10/12 max-sm:text-sm text-center py-20 max-sm:py-5'>
                        <p className="mb-4 text-main-white">
                        {content}
                    </p>
                    <h3 className="font-semibold font-pop text-main-yellow">{name}</h3>
                </div>
              </div>
            </div>
    )
}



const Testimonials = () => {
  
    const content:slider_items[] = [
        {
          name:'Ronald Doph', 
          content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt animi. Velit iste quas minima molestiae atque? Sapiente sequi molestias porro sed reprehenderit.", 
          image:'/./images/e6.jpg'
        },

        {
          name:'Mikel Tyson', 
          content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt animi. Velit iste quas minima molestiae atque? Sapiente sequi molestias porro sed reprehenderit.", 
          image:'/./images/e5.jpg'
        },
        {
          name:'Ambrose Edit', 
          content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, deserunt animi. Velit iste quas minima molestiae atque? Sapiente sequi molestias porro sed reprehenderit.", 
          image:'/./images/e4.jpg'
        },
    ]
    return (
      <div className="w-full py-16  bg-main relative mb-16 max-sm:mb-2 bg-main-red">
        <div className='text-center mb-10'>
            <h3 className='text-4xl max-sm:text-2xl font-pop font-semibold text-main-white'>What People Say About Us</h3>
        </div>
        {/* Container for the carousel or content */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">

        <Splide aria-label="My Favorite Images" options={{
                type   : 'loop',
                padding: '25%',
                gap:'15px',
                cover:true,
                height:'300px',
                classes: {
                  arrow : 'splide__arrow rounded-full bg-main-yellow p-3',
                  page : 'splide__pagination__page bg-main-yellow text-main-black',
                }
            }}>
                  {/*  */}
                  {content.map((item, index) => (
                      <SplideSlide key={index}>
                        <Sliders content={item.content} image={item.image} name={item.name} />
                      </SplideSlide >
                  ))}
            </Splide>

        </div>
      </div>
    );
  };
  
  export default Testimonials;
  
