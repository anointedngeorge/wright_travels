import Image from 'next/image'
import React from 'react'

import { FaPlay } from 'react-icons/fa'



const VideoSection = () => {
  return (
    <div className='flex h-[26rem] mb-2 mt-24 place-content-center max-sm:p-10'>
        <div className="w-3/5 h-full max-sm:w-full max-md:w-full relative">
            <div className='grid w-full h-full  bg-main-red bg-opacity-30 absolute rounded-lg place-content-center   '>
                <div className='cursor-pointer w-24 h-24 flex place-content-center items-center  rounded-full bg-gradient-to-r shadow shadow-main-white text-main-white from-main-red to-main-green'>
                    <FaPlay className='text-main-white' size={40}/>
                </div>
            </div>
            <iframe src="https://www.youtube.com/embed/WG_aY5mFMJ8?si=9S8W1w8hIjMmuNb8" className='w-full h-full rounded-lg'></iframe>
        </div>
    </div>
  )
}

export default VideoSection
