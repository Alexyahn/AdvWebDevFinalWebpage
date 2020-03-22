import React from 'react';

function Navbar() {
    return <nav class="navbar">
            <a class="concordia-login" href="https://csp.edu">Concordia</a>
            <div class="navbar-home">
                <div class="navbar-nav">
                <a class="nav-item nav-link" href="Home">Home</a>
                <a class="nav-item nav-link" href="LoginForm">Login</a>
                </div>
            </div>
            </nav>
    }

export default Navbar;
