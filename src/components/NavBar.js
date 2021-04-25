import React from 'react'
import './NavBar.css';
import {Link} from 'react-router-dom'

function Navbar() {

    return(
        <div>
        <nav className="navbar">
            <div className="navbar-container">
                <ul className='ba'>
                    <li>
                    <span> <button className="b1">
                        <Link to = "/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link> 
                    </button> </span>
                    <span>  <button className="b1">
                        <Link to = "/About" style={{ textDecoration: 'none', color: 'white' }}>About</Link> 
                    </button> </span>
                    <span> <button className="b1">
                        <Link to = "/Portifolio" style={{ textDecoration: 'none', color: 'white' }}>Portifolio</Link>
                    </button> </span>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Navbar