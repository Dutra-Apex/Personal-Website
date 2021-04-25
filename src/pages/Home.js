import React from 'react'
import logo from './logo.svg'
import './Home.css'

function Home(){
    return(
        <div className="Home">
        <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Gabriel Dutra's Personal Website
        </p>
      </header>
      </div>
      
    );
}

export default Home;