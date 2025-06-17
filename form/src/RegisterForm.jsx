import React from 'react';
import { useNavigate } from 'react-router-dom';
import useFormField from './hooks/useFormField';
import InputField from './components/InputField';
import "./registerForm.css"

function RegisterForm() {
    const navigate = useNavigate();

    const name = useFormField('', (v) => (v ? null : 'Name is required'));
    const email = useFormField('', (v) =>
        v.includes('@') ? null : 'Email must include @'
    );
    const password = useFormField('', (v) =>
        v.length >= 6 ? null : 'Password must be at least 6 characters'
    );

    const formIsValid = name.isValid && email.isValid && password.isValid && 
                        name.touched && email.touched && password.touched;

    function handleSubmit(e) {
        e.preventDefault();
        if (!formIsValid) return;

        // Navigate to welcome page with name as route param
        navigate(`/welcome/${encodeURIComponent(name.value)}`);
    }

    return (
        <div className='register-container'>
            <form className='register-form' onSubmit={handleSubmit}>
                <h2 className='register-title'>Register</h2>
                <div className='register-input-container'>
                    <InputField label="Name" field={name} />
                    <InputField label="Email" field={email} />
                    <InputField label="Password" type="password" field={password} />
                </div>
                <button className='register-button' type="submit" disabled={!formIsValid}>
                    Register
                </button>
        </form>
        </div>
    );
}

export default RegisterForm;
