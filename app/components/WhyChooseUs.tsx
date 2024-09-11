import Image from 'next/image'
import React from 'react'


interface  contentdata {title:string, image:string, description?:string}

const Chooseus = ({title, image, description}: contentdata) => {
  return (
    <div className='flex max-sm:flex-grow-0 place-content-center items-center mt-4 mb-4 shadow-sm drop-shadow-lg shadow-main-white p-3 bg-main-white bg-opacity-20 rounded-full'>
        <div className='max-sm:place-content-center max-md:place-content-center'>
            <div title={title} className='w-32 h-32 max-sm:w-20 max-sm:h-20 max-md:w-20 max-md:h-20 rounded-full relative' style={{
                background:`url(${image})`,
                backgroundPosition:'center',
                backgroundSize:"cover"
            }}>
                
            </div>
        </div>
        <div className='text-center'>
                <h3 className='font-pop text-2xl max-sm:text-sm max-md:text-sm text-main-yellow font-semibold mb-2'>{title}</h3>
                <p className='text-main-white max-sm:text-sm'>
                    {description}
                </p>
        </div>
    </div>
  )
}




const WhyChooseUs = () => {
    const data: contentdata[] = [
        {
            title:"We Are Honest & Dependable", 
            image:'/./images/e3.jpg', 
            description:"At Wright Travel, integrity is at the core of everything we do. We believe in being transparent and providing reliable services to our clients. You can trust us to handle your travel plans with utmost care, ensuring that your experience is smooth and worry-free from start to finish. Our dedication to honesty ensures that we deliver exactly what we promise, fostering long-term relationships with our clients."
        },

        {
            title:"We Are Always Improving", 
            image:'/./images/e2.jpg', 
            description:"In a rapidly evolving travel industry, staying ahead is essential. At Wright Travel, we continuously seek innovative ways to improve our services and operations. Whether it’s through adopting new technologies or expanding our destination offerings, we are committed to refining our processes to better serve our clients. Your satisfaction is our top priority, and we believe that constant improvement is key to delivering exceptional travel experiences."
        }, 

        {
            title:"We Are Passionate", 
            image:'/./images/e4.jpg', 
            description:"Travel is more than just a service for us—it’s our passion. At Wright Travel, we are passionate about exploring the world and helping others do the same. Our love for travel drives us to create unique, memorable experiences for every client. We go the extra mile to ensure that every trip we plan reflects our enthusiasm, attention to detail, and desire to make your journey unforgettable."
        },

    ]
  return (
    <div className='flex mt-10 mb-10 p-10 bg-gradient-to-b from-main-red to-main-green'>
        <div className='w-2/6 max-sm:hidden max-md:hidden  relative '>
            <Image src={`/./images/e9.jpg`} fill={true} alt={''} className='absolute rounded-xl' />
        </div>
        <div className=' w-3/4 max-sm:w-full max-md:w-full p-10 max-sm:p-0 max-md:p-0'>
            {data.map((item, index) => (
                    <Chooseus key={index} title={item.title} image={item.image} description={item.description} />
            ) )}
            
        </div>
    </div>
  )
}

export default WhyChooseUs
