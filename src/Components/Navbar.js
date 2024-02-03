import React from 'react'
import "./navbarstyles.css"
import logo_img from './assets/images/logo_white.png'

function Navbar() {
    return (
        <div className='all-nav-bar'>

            <span className='navbar_logo'>
                <img src={logo_img} alt='logo_img' />
            </span>

            <div className='navbar_content'>
                <a href='#/'>Home</a>
                <a href='#allblogs'>All Blogs</a>
                <a href='#contact'>Contact</a>

            </div>
        </div>
    )
}

export default Navbar