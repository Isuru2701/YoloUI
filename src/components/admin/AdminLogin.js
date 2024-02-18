import React from "react";
import "../../styles/user.css";
import Cookies from 'js-cookie';

function AdminLogin() {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const loginData = {
            email: event.target.email.value,
            password: event.target.password.value
        };

        try {
            const response = await fetch('http://127.0.0.1:5000/admin/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            const data = await response.json();

            if (data.success) {
                console.log(data);
                const { admin_id, admin_hash } = data;
                Cookies.set("admin_id", admin_id, { expires: 7 }); 
                Cookies.set("admin_hash", admin_hash, { expires: 7 });
                window.location.href = 'admin-dashboard.html';
            } else {
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Admin - Login (office use only)</h2>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default AdminLogin;
