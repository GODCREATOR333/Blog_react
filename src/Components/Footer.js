import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <ul className='footer__categories'>
        <li><Link to='posts/categories/coding'>Coding</Link></li>
        <li><Link to='posts/categories/maths'>Maths</Link></li>
        <li><Link to='posts/categories/physics'>Physics</Link></li>
        <li><Link to='posts/categories/literature'>Literature</Link></li>
        <li><Link to='posts/categories/investment'>Investment</Link></li>
        <li><Link to='posts/categories/astronomy'>Astronomy</Link></li>
        <li><Link to='posts/categories/agriculture'>Agriculture</Link></li>
      </ul>

      <div className='footer_copyright'>
        <small>All Rights Reserved  &copy; Copyright , GodCreator333 </small>

      </div>
    </footer>
  )
}

export default Footer
