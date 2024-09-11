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
                content:'With Wright Gateway travel and Tour, you do not need to have any worry on where to stay locally and internationally.  Your accommodation is just away from WhatsApp +2348036140047; +2348024192861', 
                image:'/./images/e10.jpg'
            },
            {
                title:'Flight Ticket', 
                content:'We are reliable in getting Cheap and affordable flight, irrespective of your destination. WhatsApp +2348036140047; +2348024192861.', 
                image:'/./images/e12.jpg'
            },
       ],
  
        [
            {
                title:'Tour Package', 
                content:'Be it Honeymoon, Escorted, Hosted, Independent and Group Tour, we will help you make it your dream come true. WhatsApp +2348036140047; +2348024192861', 
                image:'/./images/e11.jpg'
            },
            {
                title:'Visa Assistance', 
                content:'Are you planning to travel outside the country but don’t know how to start your Visa Process, we are here to assist you in the areas of Visiting/Tourism Visa, Student’s Visa, etc. WhatsApp +2348036140047; +2348024192861 ', 
                image:'/./images/e13.jpg'
            },

            {
                title:'Travel Insurance', 
                content:'Travelling Health Insurance is one of the basic requirements for travelers outside the country. We partner with reputable Insurance Companies to give you topnotch services as expected. WhatsApp +2348036140047; +2348024192861', 
                image:'/./images/e12.jpg'
            },


        ]
    
]



const Card = ({item}:{item:any}) => {
   
    
  return (
    <div className='w-2/4 h-96 max-sm:w-full max-sm:mt-10 overflow-hidden'>
        <div className="w-full h-56 relative">
            <Image src={`${item['image']}`} alt='...' fill={true} />
        </div>
        <h3 className='font-pop font-semibold text-2xl max-sm:text-lg text-center mt-3'>{item['title']}</h3>
        <p className='p-4 max-sm:p-2 text-center max-sm:text-left'>
            {item['content']}
        </p>
    </div>
  )
}




const ServicesItems = ({data}:{data:content[]}) => {

  return (
    <div className="flex max-sm:flex-col mt-5 mb-5 space-x-2 max-sm:space-x-0">
        {data.map((item, index) => (            
            <Card key={index} item={item}  />
        ))}
        
    </div>
  )
}



const Services = () => {
  return (
    <div className='w-full p-20 max-sm:p-3 mt-3'>
        <div className='text-center'>
            <p className='font-pop text-main-yellow font-semibold'>Wright Travels &amp; Tours</p>
            <h3 className='text-4xl max-sm:text-2xl font-pop font-semibold bg-gradient-to-tr from-main-red to-main-green text-transparent bg-clip-text'>Our Services</h3>
        </div>
        <div className="mt-10 mb-2"></div>
        
        {data_content.map((item, index) => (
            <ServicesItems  key={index} data={item} />
        ))}
        
   
    </div>
  )
}

export default Services
