import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
import api from '../api/axiosConfig';

export default function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            // Adjust endpoint as needed
            const response = await api.post('/user/login', {
                userName: username,
                password: password
            });
            setSuccess('Login successful!');
            // Optionally, redirect or set auth state here
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="box">
                <div className="left">
                    <div className="overlay">
                        <h1>TechTubeGuide:</h1>
                        <div id="subTitle">Your Personalized Technical YouTube Course Suggestion App</div>
                        <div id="description">Are you overwhelmed by the vast sea of technical content on YouTube? TechTubeGuide is here to simplify your learning journey. Our application is your ultimate companion for discovering the best technical YouTube courses tailored to your interests and skill level.</div>
                        <span>
                            <p>Login using Social Media Account</p>
                            <a href="/Error"><i className="fa fa-facebook" aria-hidden="true"></i> Login using Facebook</a>
                            <a href="/Error"><i className="fa fa-google" aria-hidden="true"></i> Login using Google</a>
                        </span>
                    </div>
                </div>


                <div className="right">
                    <h5>Login Page</h5>
                    <p>Don't have an account? <a href="/SignUp">Create Your Account</a> . It takes less than a minute</p>
                    <form onSubmit={handleSubmit}>
                        <div className="inputs">
                            <input className="input" type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required />
                            <input className="input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
                        </div>
                        <div className="forget-password">
                            <p><a href="/Error">Forget password?</a></p>
                        </div>
                        <button type="submit" disabled={loading}>{loading ? 'Logging in...' : 'Login'}</button>
                    </form>
                    {error && <div className="text-danger">{error}</div>}
                    {success && <div className="text-success">{success}</div>}
                </div>

            </div>
        </>
    )
}

