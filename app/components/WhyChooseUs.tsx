import Image from 'next/image'
import React from 'react'

interface ContentData {
  title: string;
  image: string;
  description?: string;
}

const ChooseUs = ({ title, image, description }: ContentData) => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-center sm:justify-start sm:items-start mt-4 mb-4 shadow-sm drop-shadow-lg shadow-main-white p-3 bg-main-white bg-opacity-20 rounded-lg'>
      <div className='sm:w-32 sm:h-32 w-20 h-20 rounded-full relative overflow-hidden' title={title}>
        <Image src={image} alt={title} layout="fill" objectFit="cover" className='rounded-full' />
      </div>
      <div className='sm:ml-4 text-center sm:text-left'>
        <h3 className='font-pop text-xl sm:text-2xl text-main-yellow font-semibold mb-2'>{title}</h3>
        <p className='text-main-white text-sm sm:text-base'>
          {description}
        </p>
      </div>
    </div>
  );
};

const WhyChooseUs = () => {
  const data: ContentData[] = [
    {
      title: "We Are Honest & Dependable",
      image: '/images/e3.jpg',
      description: "At Wright Travel, integrity is at the core of everything we do. We believe in being transparent and providing reliable services to our clients..."
    },
    {
      title: "We Are Always Improving",
      image: '/images/e2.jpg',
      description: "In a rapidly evolving travel industry, staying ahead is essential. At Wright Travel, we continuously seek innovative ways to improve our services..."
    },
    {
      title: "We Are Passionate",
      image: '/images/e4.jpg',
      description: "Travel is more than just a service for us—it’s our passion. At Wright Travel, we are passionate about exploring the world and helping others do the same..."
    },
  ];

  return (
    <div className='flex flex-col lg:flex-row mt-10 mb-10 p-6 lg:p-10 bg-gradient-to-b from-main-red to-main-green'>
      <div className='w-full lg:w-1/3 hidden lg:block relative mb-6 lg:mb-0'>
        <Image src='/images/e9.jpg' layout='fill' objectFit='cover' alt='' className='rounded-xl' />
      </div>
      <div className='w-full lg:w-2/3 space-y-6'>
        {data.map((item, index) => (
          <ChooseUs key={index} title={item.title} image={item.image} description={item.description} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
