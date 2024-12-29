import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { UserData } from './context';
import './Login.css';


const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { setUser, setIsAuth } = UserData
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/loginuser', formData);
            alert('Login successful');
            setUser(response[0])
            setIsAuth(true)
        } catch (err) {
            alert('Invalid credentials');
        }
    };

    return (
        <>
            <div className="login-container">
                <div className="login-box">
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <div className="form-group">
                            <label>
                                Usn:
                                <input type="text" name="usn" onChange={handleChange} required />
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                Password:
                                <input type="password" name="password" onChange={handleChange} required />
                            </label>
                        </div>
                        <button type="submit" className="submit-btn">Login</button>
                    </form>

                    <p>Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </div>
        </>

    );
};

export default Login;
