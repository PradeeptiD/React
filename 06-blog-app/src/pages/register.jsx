import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './register.css';

function useFormField(initialValue, validate) {
    const [value, setValue] = useState(initialValue);
    const [touched, setTouched] = useState(false);
    const [error, setError] = useState(validate(initialValue));

    function handleChange(e) {
        const newValue = e.target.value;
        setValue(newValue);
        setError(validate(newValue));
    }

    function handleBlur() {
        setTouched(true);
    }

    return {
        value,
        onChange: handleChange,
        onBlur: handleBlur,
        error,
        touched,
        isValid: !error,
    };
}

function InputField({ label, type = 'text', field }) {
    return (
        <div className='input-field'>
            <label>{label}</label>
            <input
                type={type}
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
                className={field.error && field.touched ? 'input-error' : ''}
            />
            {field.touched && field.error && (
                <p className='error-text'>{field.error}</p>
            )}
        </div>
    );
}

function Register() {
    const navigate = useNavigate();

    const name = useFormField('', (v) => (v ? null : 'Name is required'));
    const email = useFormField('', (v) =>
        v.includes('@') ? null : 'Email must include @'
    );
    const password = useFormField('', (v) =>
        v.length >= 6 ? null : 'Password must be at least 6 characters'
    );

    const formIsValid =
        name.isValid && email.isValid && password.isValid &&
        name.touched && email.touched && password.touched;

    function handleSubmit(e) {
        e.preventDefault();
        if (!formIsValid) return;
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
                <button
                    className='register-button'
                    type="submit"
                    disabled={!formIsValid}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
