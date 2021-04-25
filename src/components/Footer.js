import React from 'react'
import './Footer.css';
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Footer() {

    return(
        <div>
        <nav className="footer">
            <div className="footer-container">
                <p>Find me on:</p>
                <ul className='ba'>
                    <li>
                    <span> <button className="b1">
                        <a href = "https://github.com/Dutra-Apex" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                            <FontAwesomeIcon icon={faGithub} size='2x'/></a> 
                    </button> </span>
                    <span>  <button className="b1">
                        <a href = "https://www.linkedin.com/in/gabrieldutra01/?locale=en_US" target="_blank" style={{ textDecoration: 'none', color: 'white' }}>
                            <FontAwesomeIcon icon={faLinkedinIn} size='2x'/></a> 
                    </button> </span>
                    </li>
                </ul>
            </div>
        </nav>
        </div>
    )
}

export default Footer