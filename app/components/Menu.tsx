
import React from 'react'


 
interface linksNav {
    title:string,
    url?:string,
    classname?:string,
    is_active?:boolean
}

const MenuLinks = ({links}: {links:linksNav[]}) => {
    return links.map((link, index) => (
        <li key={index}> 
            <a href={link.url} className={link.is_active? `font-pop font-semibold bg-neutral-400 bg-opacity-5 rounded-lg text-main-green p-3 ${link.classname}`: `p-3 font-pop font-semibold text-main-red ${link.classname}` } > {link.title} </a>
        </li>
    ))
}





const Menu = () => {
  return (
    <div className='w-full bg-main-white shadow-sm content-center h-16 mt-1 bg-'>
        <div className="grid grid-flow-col px-16">
            <div>
                <p className='font-pop font-semibold'>
                    Wright Travels
                </p>
            </div>
            <div>
                <nav className='float-right'>
                    <ul className={`flex flex-row space-x-4`}>
                        <MenuLinks links={[
                            {title:'Home', url:'#', is_active:true},
                            {title:'About us', url:'#'},
                            {title:'Gallery', url:'#'},
                            {title:'Blog', url:'#'},
                            {title:'Contact', url:'#'}
                        ]} />
                    </ul>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default Menu
