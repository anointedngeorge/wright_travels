import Image from 'next/image';
import React from 'react'


export const Sliders = () => {
    return (
        <div className="w-2/3 h-full bg-main-brown rounded-lg">
                
              <div className="flex space-x-2">
                <div className='w-2/3 h-auto relative'>
                        <Image
                            src="/./images/e15.jpg"
                            alt="Person"
                            fill={true}
                            className="object-cover w-full h-full"
                        />
                </div>
                <div className='text-center py-20'>
                        <p className="mb-4 text-main-white">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                        Repudiandae, quidem.
                    </p>
                    <h3 className="font-semibold font-pop text-main-yellow">Ronald Richards</h3>
                </div>
              </div>
            </div>
    )
}



const Testimonials = () => {
    return (
      <div className="w-full py-16 bg-main relative mb-16 bg-main-red">
        <div className='text-center mb-10'>
            <h3 className='text-4xl font-pop font-semibold text-main-white'>What People Say About Us</h3>
        </div>
        {/* Container for the carousel or content */}
        <div className="relative w-full max-w-5xl mx-auto overflow-hidden">
          <div className="absolute inset-y-0 left-0 flex items-center">
            {/* Left Arrow */}
            <div className="w-10 h-10 bg-main-yellow rounded-full">
                <button className="text-main-black text-center">
                <svg
                    className="h-full w-full"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                    ></path>
                </svg>
                </button>
            </div>
          </div>
  
          <div className="flex items-center justify-center space-x-4">
            {/* Testimonial Content */}
            <div className="w-1/4 h-56 bg-main-green">
              <img
                src="https://via.placeholder.com/150"
                alt="Person"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
            <Sliders />
            <div className="w-1/4 h-56 bg-main-green">
              <img
                src="https://via.placeholder.com/150"
                alt="Person"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
  
          <div className="absolute inset-y-9  right-0 flex items-center">
            {/* Right Arrow */}
            <div className="w-10 h-10 bg-main-yellow rounded-full">
            <button>
              <svg
                className="h-full w-full"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Testimonials;
  
