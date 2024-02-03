import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
function Navbar() {
    return (
        <nav>
            <div classname="container nav__container" >

                <Link to="/" classname='nav_logo'>
                    <img src={logo} alt='logo' />
                </Link>

                <ul>
                    <li><Link to='/allposts'>All Posts</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>

                <button className='nav__toggle-btn'>
                    <AiOutlineClose />
                </button>

            </div>

        </nav>
    )
}

export default Navbar