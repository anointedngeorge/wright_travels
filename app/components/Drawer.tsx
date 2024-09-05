import React from 'react'
import Link from 'next/link'
import {linksNav} from "../app_interface"


const Drawer = ({data}:{data:linksNav[]}) => {
  return (
    <div className="drawer drawer-end z-50">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* Page content here */}
            {/* <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label> */}
        </div>
        
        <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 font-pop">
                {data.map((item, index) => (
                    <li key={index}>
                        <Link
                            key={index}
                            href={item.url}
                            className={`${item.classname}`}
                         >
                            {item.title}
                        </Link>
                    </li>
                ))}
                
            </ul>
        </div>
    </div>
  )
}

export default Drawer
