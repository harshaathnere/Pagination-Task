import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'

const Nav = () => {
    return (
        <div>
            <nav>
                <h3>Logo</h3>
                <ul className="nav-links">
                  <Link to="/about">
                  <li>About</li>
                  </Link>  
                  <Link to="/table">
                  <li>Customer Table</li>
                  </Link> 
                </ul>
            </nav>
        </div>
    )
}

export default Nav
