import React, { useState } from 'react';
import Cookies from 'js-cookie';
import '../styles/user.css';
function Register() {
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [region, setRegion] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, country, region, email, password }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            // Assuming the response contains the username
            const data = await response.json();

            // Set username as a cookie
            Cookies.set('username', data.username);

            // Optionally, you can redirect the user to another page
            // window.location.href = '/dashboard';

        } catch (error) {
            console.error('Error registering:', error.message);
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleRegister}>
                <h2>Register</h2>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="country">Country</label>
                    <input
                        type="text"
                        id="country"
                        name="country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="region">Region</label>
                    <input
                        type="text"
                        id="region"
                        name="region"
                        value={region}
                        onChange={(e) => setRegion(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="confirm-password">Confirm Password</label>
                    <input
                        type="password"
                        id="confirm-password"
                        name="confirm-password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group inline">
                    <input
                        type="checkbox"
                        className="check"
                        id="agree"
                        name="agree"
                        required
                    />
                    <label htmlFor="agree" className="term">
                        I agree to the terms and conditions
                    </label>
                </div>
                <button type="submit" className='login-button'>Register</button>
                <a className="redirect" href="login.html">
                    already have an account? click here to login
                </a>
            </form>
        </div>
    );
}

export default Register;
