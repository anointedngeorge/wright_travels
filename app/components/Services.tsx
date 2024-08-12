import Image from 'next/image'
import React from 'react'


interface content {
    title:string,
    content:string,
    image:string
}


const data_content:content[][] = [
    
       [
            {
                title:'Hotel Reservation', 
                content:'Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam aliquet molestie pharetra. Fames sit ultrices hendrerit porttitor duis enim nibh.', 
                image:'/./images/e10.jpg'
            },
            {
                title:'Flight Reservation', 
                content:'Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam aliquet molestie pharetra. Fames sit ultrices hendrerit porttitor duis enim nibh.', 
                image:'/./images/e12.jpg'
            },
       ],
  
        [
            {
                title:'Tour Arrangements', 
                content:'Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam aliquet molestie pharetra. Fames sit ultrices hendrerit porttitor duis enim nibh.', 
                image:'/./images/e11.jpg'
            },
            {
                title:'Visa Advisory', 
                content:'Lorem ipsum dolor sit amet consectetur. Imperdiet aliquam aliquet molestie pharetra. Fames sit ultrices hendrerit porttitor duis enim nibh.  ', 
                image:'/./images/e13.jpg'
            },
        ]
    
]



const Card = ({item}:{item:any}) => {
   
    
  return (
    <div className='w-2/4 h-96 overflow-hidden'>
        <div className="w-full h-56 relative">
            <Image src={`${item['image']}`} alt='...' fill={true} />
        </div>
        <h3 className='font-pop font-semibold text-2xl text-center mt-3'>{item['title']}</h3>
        <p className='p-4 text-center'>
            {item['content']}
        </p>
    </div>
  )
}




const ServicesItems = ({data}:{data:content[]}) => {

  return (
    <div className="flex mt-5 mb-5 space-x-2">
        {data.map((item, index) => (            
            <Card key={index} item={item}  />
        ))}
        
    </div>
  )
}



const Services = () => {
  return (
    <div className='w-full p-20 mt-3'>
        <div className='text-center'>
            <p className='font-pop text-main-yellow font-semibold'>Wright Travels &amp; Tours</p>
            <h3 className='text-4xl font-pop font-semibold bg-gradient-to-tr from-main-red to-main-green text-transparent bg-clip-text'>Our Services</h3>
        </div>
        <div className="mt-10 mb-2"></div>
        
        {data_content.map((item, index) => (
            <ServicesItems  key={index} data={item} />
        ))}
        
   
    </div>
  )
}

export default Services
