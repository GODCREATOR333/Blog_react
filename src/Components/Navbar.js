import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'
import { FaBars } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'


function Navbar() {

    const [isNavShowing, setIsNavShowing] = useState(window.innerWidth > 800 ? true : false);

    const closeNavHandler = () => {
        if (window.innerWidth < 800) {
            setIsNavShowing(false);
        } else {
            setIsNavShowing(true)
        }
    }

    return (
        <nav>
            <div className="container nav__container" >

                <Link to="/" className='nav_logo'>
                    <img src={logo} alt='logo' onClick={closeNavHandler} />
                </Link>

                {isNavShowing && <ul className='nav_menu'>
                    <li><Link to='/allposts' onClick={closeNavHandler}>All Posts</Link></li>
                    <li><Link to='/about' onClick={closeNavHandler}>About</Link></li>
                    <li><Link to='/contact' onClick={closeNavHandler}>Contact</Link></li>
                    <li>
                        <a href='https://www.linkedin.com/in/hari-preetham-934789201/' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} size='2x' />
                        </a>
                    </li>
                    <li>
                        <a href='https://github.com/GODCREATOR333' target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size='2x' />
                        </a>
                    </li>
                </ul>}


                <button className='nav_toggle-btn' onClick={() => setIsNavShowing(!isNavShowing)}>
                    {isNavShowing ? < AiOutlineClose /> : <FaBars />}
                </button>

            </div>

        </nav>
    )
}

export default Navbar