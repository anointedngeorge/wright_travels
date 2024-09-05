
import Link from 'next/link'
import React from 'react'
import { BsThreeDots, BsThreeDotsVertical } from 'react-icons/bs'
import { TbGridDots } from 'react-icons/tb'
import Drawer from './Drawer'
import {linksNav} from "../app_interface"



const MenuLinks = ({links}: {links:linksNav[]}) => {
    return links.map((link, index) => (
        <li key={index}> 
            <Link href={link.url} className={link.is_active? `font-pop font-normal bg-neutral-400 bg-opacity-5 rounded-lg text-main-green p-3 ${link.classname}`: `p-3 font-pop font-normal text-main-red ${link.classname}` } > {link.title} </Link>
        </li>
    ))
}





const Menu = () => {
    const content = [
        {title:'Home', url:'#', is_active:true},
        {title:'About us', url:'#'},
        {title:'Gallery', url:'#'},
        {title:'Blog', url:'#'},
        {title:'Contact', url:'#'},
        
    ]
  return (
    <div className='w-full bg-main-white shadow-sm content-center h-16 mt-1 bg-'>
        <div className="grid grid-flow-col px-16 items-center">
            <div>
                <p className='font-pop font-normal'>
                    Wright Travels
                </p>
            </div>
            <div className='max-sm:hidden max-md:hidden'>
                <nav className='float-right'>
                    <ul className={`flex flex-row space-x-4 items-center`}>
                        <MenuLinks links={content} />
                        <li><button className='btn btn-success text-main-white'>Booking</button></li>
                    </ul>
                    
                </nav>
            </div>
            <div className='hidden max-sm:block '>
                <div className='float-right'>
                    <label htmlFor="my-drawer-4" className="drawer-button cursor-pointer"><TbGridDots size={38} /></label>
                </div>
            </div>
        </div>
        <Drawer data={content} />
    </div>
  )
}

export default Menu
