import React from 'react';
import { useState } from 'react';
import '../styles/user.css';
import Cookies from 'cookies-js';
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            // Assuming the response contains the username
            const data = await response.json();

            // Set username as a cookie
            Cookies.set('username', data.username);
            window.location.href = '/';

        } catch (error) {
            console.error('Error logging in:', error.message);
        }
    }

    return (
        <>
            <div class="registration-container">
                <form class="registration-form">
                    <h2>Login</h2>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button className='login-button' type="submit" onClick={handleLogin}>Register</button>
                    <br></br>
                    <a class="redirect" href="/register">New to the platform? create an account for free.</a>
                </form>
            </div>

        </>
    )
}

export default Login;