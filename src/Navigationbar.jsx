import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const navigationbar = () => {
    return (
        <div>
            <nav className='bg-black text-white flex justify-between px-4 items-center fixed top-0 left-0 w-full z-50'>
                <h1 className="text-3xl">LOGO</h1>
                <ul className=''>
                    <li>
                        <li><Link to="/">home</Link></li>
                        <li><Link to="/blogs">Blogs</Link></li>
                        <li><Link to="/about">about</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default navigationbar