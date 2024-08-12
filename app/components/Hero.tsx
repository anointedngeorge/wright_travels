import React from 'react'


interface sliders  {
    title:string,
    image_path?:string,
    classname?:string
}

const SmallDots = () => {
  return (
    <div className="flex item-center">
        <div className="w-2 h-2 rounded-full bg-main-yellow text-center"></div>
        <div className="w-2 h-2 rounded-full bg-main-yellow text-center"></div>
        <div className="w-2 h-2 rounded-full bg-main-yellow text-center"></div>
        <div className="w-2 h-2 rounded-full bg-main-red text-center"></div>
        <div className="w-2 h-2 rounded-full bg-main-yellow text-center"></div>
        <div className="w-2 h-2 rounded-full bg-main-yellow text-center"></div>
        <div className="w-2 h-2 rounded-full bg-main-yellow text-center"></div>
    </div>
  )
}




const Sliders = ({items}:{items:sliders[]}) => {
  return items.map( (item, index) => (
    <div key={index} className={`${item.classname} relative rounded-2xl`} style={{
        background:`url(${item.image_path})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }}>
    
    <div className='absolute bg-main-black w-full p-3 my-[42px] text-main-white font-pop font-semibold bg-opacity-50 
    tracking-widest text-center'>{item.title}</div>
    </div>
  ) )
}






const Hero = () => {
    const class_values = 'w-60 h-36'
  return (
    <div className='w-full h-[620px] relative' style={{
        background:"url(../images/bg.jpg)",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }}>
        {/* overlay */}
        <div className='w-full h-full absolute bg-main-black bg-opacity-35 '></div>
        {/* end of overlay */}


        {/* title */}
        <div className="w-full flex flex-col items-center mt-40  h-auto  absolute bg-main-black bg-opacity-20 p-16">
            <div>
                <h3 className='font-memo text-5xl font-bold  text-main-white tracking-widest uppercase'>Let's Start Booking</h3>
            </div>
            <div className='mt-2'>
                <h3 className='font-pop text-2xl font-normal text-base-300 tracking-widest'>
                    Business Trips, Vacations &amp; Lots More !
                </h3>
            </div>

            <div className='w-2/4 text-center mt-3'>
                <p className='font-semibold text-main-white text-center'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore, quidem maiores? Recusandae, 
                    perferendis! Dolorum quae nemo quasi, eligendi quaerat
                </p>
            </div>


            {/* sliders */}

            {/* <div className="w-full mt-10 mb-2 flex flex-flow-col space-x-10 overflow-hidden">
               <Sliders items={[
                    {title:'America', image_path:'../images/e4.jpg', classname:class_values },
                    {title:'South Africa', image_path:'../images/e5.jpg', classname:class_values },
                    {title:'United Kingdom', image_path:'../images/e6.jpg', classname:class_values },
                    {title:'China', image_path:'../images/e7.jpg', classname:class_values },
                    {title:'Israel', image_path:'../images/e11.jpg', classname:class_values }
               ]} />
               
            </div> */}
            {/* small dots */}
            {/* <SmallDots /> */}
            {/* small dots */}
            {/* end of sliders */}
        </div>

    </div>
  )
}

export default Hero
