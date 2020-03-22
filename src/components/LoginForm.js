import React from 'react';

function LoginForm() {
    return <form className="menu">
                <div className="form">
                    <label htmlfor="email"></label>
                    <input type="email" className="form-control" id="exampleEmail" placeholder="email@example.com" />
                </div>
                <div className="form">
                    <label htmlfor="password"></label>
                    <input type="password" className="form-control" id="examplePass" placeholder="Password" />
                </div>
                <div className="form-group">
                <div className="form-check">
                </div>
                </div>
                <button type="submit" className="btn-primary">Sign in</button>
            </form>
    }

export default LoginForm;