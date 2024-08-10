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
    <div className="flex flex-row space-x-2 uppercase">
      <div><p>{<Icon />}</p></div>
      <div><p>{title}</p></div>
  </div>
  )
}





const Topnav = () => {
  return (
    <div className='w-full p-4 bg-gradient-to-r text-neutral-100 from-main-red to-main-green' >
        <div className="grid grid-flow-col leading-3">
            <div>
                <Topnavcontent icon={FaLocationDot} title='no 28 owerri road behind ABC transport, enugu.' />
            </div>
            <div className='text-left'><Topnavcontent icon={MdOutlineEmail} title='support@gmail.com' /></div>
            <div className='text-left'><Topnavcontent icon={FaPhone} title='+234(0)80-453-234-54' /></div>
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
