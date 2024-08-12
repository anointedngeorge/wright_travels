import React from 'react'

const NewsLetter = () => {
  return (
    <div className='flex py-16 place-content-center'>
        <div className='w-4/6 h-36  place-content-center p-4'>
            <h3 className='text-center text-3xl font-pop font-semibold mb-5'>Newsletter</h3>
            <input type="email" className='w-full rounded-full p-5 border-2 font-pop  uppercase text-main-black' placeholder='email address ...' />
        </div>
    </div>
  )
}

export default NewsLetter
