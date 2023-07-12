import React from 'react'
import { Link } from 'react-router-dom'

const navigationbar = () => {
    return (
        <div>
            <footer className='bg-black text-white flex justify-between px-12 items-center'>
               
                <ul className='flex flex-col '>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <ul className='flex flex-col '>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/blogs">Blogs</Link></li>
                    <li><Link to="/about">about</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default navigationbar