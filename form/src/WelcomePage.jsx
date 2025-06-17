import React from 'react';
import { useParams } from 'react-router-dom';
import "./registerForm.css"

function WelcomePage() {
    const { name } = useParams();

    return (
        <div className='welcome-container'>
            <h1 className='welcome-title'>Welcome, {decodeURIComponent(name)}</h1>
        </div>
    );
}

export default WelcomePage;
