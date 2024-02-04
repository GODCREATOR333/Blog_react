import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
// import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'


function Navbar() {
    return (
        <nav>
            <div className="container nav__container" >

                <Link to="/" className='nav_logo'>
                    <img  src={logo} alt='logo' />
                </Link>

                <ul className='nav_menu'>
                    <li><Link to='/allposts'>All Posts</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li>
                        <a href='https://www.linkedin.com/in/hari-preetham-934789201/' target="_blank" rel="noopener noreferrer">
                             <FontAwesomeIcon icon={faLinkedin} size='2x'/>
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/GODCREATOR333' target="_blank" rel="noopener noreferrer">
                             <FontAwesomeIcon icon={faGithub} size='2x'/>
                        </a>
                    </li>
                </ul>

                
                <button className='nav_toggle-btn'>
                    <AiOutlineClose />
                </button>

            </div>

        </nav>
    )
}

export default Navbar