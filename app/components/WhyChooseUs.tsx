import Image from 'next/image'
import React from 'react'


interface  contentdata {title:string, image:string, description?:string}

const Chooseus = ({title, image, description}: contentdata) => {
  return (
    <div className='flex mt-4 mb-4 shadow-sm drop-shadow-lg shadow-main-white p-3 bg-main-white bg-opacity-20 rounded-full'>
        <div>
            <div title={title} className='w-32 h-32 rounded-full  relative' style={{
                background:`url(${image})`,
                backgroundPosition:'center',
                backgroundSize:"cover"
            }}>
                
            </div>
        </div>
        <div className='text-center'>
                <h3 className='font-pop text-2xl text-main-yellow font-semibold mb-2'>{title}</h3>
                <p className='text-main-white'>
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
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores cum ullam esse, optio hic aspernatur ex quasi dignissimos repudiandae ipsum fuga, quae magni explicabo laborum minus eligendi sunt! Sed."
        },

        {
            title:"We Are Always Improving", 
            image:'/./images/e2.jpg', 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores cum ullam esse, optio hic aspernatur ex quasi dignissimos repudiandae ipsum fuga, quae magni explicabo laborum minus eligendi sunt! Sed."
        }, 

        {
            title:"We Are Passionate", 
            image:'/./images/e4.jpg', 
            description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error asperiores cum ullam esse, optio hic aspernatur ex quasi dignissimos repudiandae ipsum fuga, quae magni explicabo laborum minus eligendi sunt! Sed."
        },

    ]
  return (
    <div className='flex mt-10 mb-10 p-10 bg-gradient-to-b from-main-red to-main-green'>
        <div className='w-2/6  relative '>
            <Image src={`/./images/e9.jpg`} fill={true} alt={''} className='absolute rounded-xl' />
        </div>
        <div className=' w-3/4 p-10'>
            {data.map((item, index) => (
                    <Chooseus key={index} title={item.title} image={item.image} description={item.description} />
            ) )}
            
        </div>
    </div>
  )
}

export default WhyChooseUs
