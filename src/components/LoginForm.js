import React from 'react';

function LoginForm() {
    return <form class="menu">
                <div class="form">
                    <label for="email"></label>
                    <input type="email" class="form-control" id="exampleEmail" placeholder="email@example.com" />
                </div>
                <div class="form">
                    <label for="password"></label>
                    <input type="password" class="form-control" id="examplePass" placeholder="Password" />
                </div>
                <div class="form-group">
                <div class="form-check">
                </div>
                </div>
                <button type="submit" class="btn-primary">Sign in</button>
            </form>
    }

export default LoginForm;