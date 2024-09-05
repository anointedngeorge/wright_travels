import Image from 'next/image'
import React from 'react'


const About = () => {
  return (
    <div className='grid grid-cols-2 p-10 bg-main-white'>
        <div className='p-10 max-sm:p-0 max-md:p-0 h-[30rem]'>
            <h3 className='text- text-3xl max-sm:text-lg font-pop font-semibold bg-gradient-to-r from-main-red to-main-green via-main-green bg-clip-text text-transparent drop-shadow-sm'>Wright Travels &amp; Tours </h3>
            <p className='text-2xl max-sm:text-sm font-pop'>Why Book With Wright Travels</p>

            <div className='mt-10'>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora quaerat ut quasi alias debitis, molestias nesciunt omnis modi et ullam neque veniam totam dolores odit placeat, vel aperiam. Aspernatur, laboriosam.
                lorem
            </p>text
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus reiciendis illo at accusantium quas accusamus saepe aut sapiente molestias placeat ratione sit nobis, nostrum sint vero totam? Non, quod officiis?
            </p>
            </div>
        </div>
        <div className='bg-main-yellow h-[30rem] relative'>
          <Image src={`/./images/e8.jpg`} fill={true} alt={''} />
        </div>
    </div>
  )
}

export default About
