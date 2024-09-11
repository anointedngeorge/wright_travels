import React from 'react'
import { FaFacebook, FaInstagramSquare, FaLocationArrow } from 'react-icons/fa'
import { IconType } from 'react-icons/'
import { FaLocationDot , FaPhone, FaSquareTwitter } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'



interface contentInterface {
  title?:string,
  icon:IconType
}

const Topnavcontent = ({icon:Icon, title}:contentInterface) => {
  return (
    <div className="flex flex-row space-x-2">
      <div><p>{<Icon />}</p></div>
      <div><p>{title}</p></div>
  </div>
  )
}





const Topnav = () => {
  return (
    <div className='w-full p-4 bg-gradient-to-r text-neutral-100 from-main-red to-main-green' id='#top'>
        <div className="grid grid-flow-col max-sm:grid-flow-row leading-3 max-sm:space-y-4">
            <div className='max-sm:break-before-avoid-page'>
                <Topnavcontent icon={FaLocationDot} title='No 28 owerri road behind ABC transport, enugu.' />
            </div>
            <div className='text-left'><Topnavcontent icon={MdOutlineEmail} title='support@gmail.com' /></div>
            <div className='text-left'><Topnavcontent icon={FaPhone} title='08036140047;08024192861;08095777839' /></div>
            <div className='text-right '>
              <div className="flex flex-flow-col space-x-7">
                  <div><FaFacebook /> </div>
                  <div><FaSquareTwitter /> </div>
                  <div><FaInstagramSquare /> </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Topnav
