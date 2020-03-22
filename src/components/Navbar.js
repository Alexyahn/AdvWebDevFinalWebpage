import React from 'react';

function Navbar() {
    return <nav className="navbar">
            <a className="concordia-login" href="https://csp.edu">Concordia</a>
            <div className="navbar-home">
                <div className="navbar-nav">
                <a className="nav-item nav-link" href="Home">Home</a>
                <a className="nav-item nav-link" href="LoginForm">Login</a>
                </div>
            </div>
            </nav>
    }

export default Navbar;
