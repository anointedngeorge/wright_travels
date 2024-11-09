import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div className='grid grid-cols-2 p-10 max-sm:p-5 max-sm:mb-24 bg-main-white max-sm:flex max-sm:flex-col-reverse gap-y-2'>
          <div className='p-10 max-sm:p-0 max-md:p-0 h-[30rem] min-h-[30rem]'>
              <h3 className='text- text-3xl max-sm:text-lg font-pop font-semibold bg-gradient-to-r from-main-red to-main-green via-main-green bg-clip-text text-transparent drop-shadow-sm'>Wright Travels &amp; Tours </h3>
              <p className='text-2xl max-sm:text-sm font-pop'>Travel with Peace of Mind.</p>

              <div className='mt-3 max-sm:mt-3'>
                <p>
                    Wright Gateway travel and Tour was founded in 2020 for the main purpose of bringing together individuals across the globe to experience love through Education, Adventure, travel and tour. Wright Gateway Travel and Tour aims to bring change to travel industry in order to provide quality services of airlines, railways, cruise lines and land transport to travelers and tourists globally.
                </p>
                <p className='mt-3'>
                  At Wright Gateway Travel and Tour, we provide discounted Airline Tickets for both International and Local Flights, Hotel Reservations, Tour Packages, Abroad Study, Travel Insurance, Visa Assistance, and all Travel Protocols.
                </p>
                <p className='mt-3'>
                  More so, we organize local and international tour to best destinations within and outside Nigeria. we are the best in providing affordable service to our esteemed clients and customers.
                </p>
            </div>
        </div>
        <div className='bg-main-yellow h-[30rem] relative'>
          <Image src={`/images/e18.jpg`} fill={true} alt={''} />
        </div>
    </div>
  )
}

export default About
