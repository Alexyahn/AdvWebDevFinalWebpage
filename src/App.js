import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';

class App extends Component {
    render() {
        return (
            <div class="formBox">
            <img src="https://www.csp.edu/wp-content/themes/csponline/assets/images/logo.svg" alt="Concordia Logo" />
                <LoginForm />
            </div>
        );
    }
}

export default App;
