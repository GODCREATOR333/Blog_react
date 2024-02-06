import React from 'react'
import { Link } from 'react-router-dom'
import error from "../assets/images/error.png"

function Errorpage() {
    return (
        <section className='error-page'>
            <div className='center'>
                <h2>Page Not Found</h2>
                <img src={error} alt='error_image' style={{ height: '300px', width: '300px' }} />
                <Link to="/" className='btn primary'> Go Back Home </Link>
            </div>
        </section>
    )
}

export default Errorpage