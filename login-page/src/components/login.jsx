import React, { useState } from 'react';
import LoginImage from "../assets/login-image.png";
import { FaGoogle, FaFacebook, FaInstagram } from 'react-icons/fa';
import "./login.css";
import InputField from './inputField';

function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const onChange = (e) => setValue(e.target.value);
    const reset = () => setValue(initialValue);
    return {value, onChange, reset };
}

function Login() {
    const username = useInput('');
    const password = useInput('');

    const [submitted, setSubmitted] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        if (username.value.trim() !== '' && password.value !== '') {
            setSubmitted(true);
        }
    };

    const handleLogout = () => {
        setSubmitted(false);
        username.reset();
        password.reset();
    }

    if (submitted) {
        return(
            <div className='logged-in-container'>
                <h2 className='logged-in'>Welcome {username.value}!</h2>
                <button className='logout-button' type="submit" onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return(
        <div className="login-container">
            <img className='login-image' src={LoginImage} alt="Login Image" />
            <div className="login-text">
                <h2 className='login-title'>Welcome back!</h2>
                <form className='login-form' onSubmit={handleLogin}>
                    <div className='input-box'>
                        <InputField className='input' label="Username" inputProps={username}/>
                    </div>
                    <div className='input-box'>
                        <InputField className='input' label="Password" type="password" inputProps={password}/>
                    </div>
                    
                </form>
                <a href="#" className='forgot-password'>Forgot password?</a>
                
                <div className='input-box'>
                    <button className='login-button' type="submit" onClick={handleLogin}>Login</button>
                </div>
                    <p>or continue with</p>
                    <div className="input-socials">
                        <a className='socials' href="#"><FaGoogle/></a>
                        <a className='socials' href="#"><FaFacebook/></a>
                        <a className='socials' href="#"><FaInstagram/></a>
                    </div>
            </div>
        </div>
    );
}

export default Login;