import React from 'react';
import "../registerForm.css"

function InputField({ label, type = 'text', field }) {
    return (
        <div>
            <label className='register-label'>
                <input
                    type={type}
                    value={field.value}
                    placeholder={label}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    className='register-input'
                />
            </label>
            {field.error && (
                <div className='register-error'> {field.error} </div>
            )}
        </div>
    );
}

export default InputField;