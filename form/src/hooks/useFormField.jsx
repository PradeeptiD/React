import { useState } from 'react';

function useFormField(initialValue = '', validate) {
    const [value, setValue] = useState(initialValue);
    const [touched, setTouched] = useState(false);

    const error = touched && validate ? validate(value) : null;

    function onChange(e) {
        setValue(e.target.value);
    }

    function onBlur() {
        setTouched(true);
    }

    return {
        value,
        onChange,
        onBlur,
        error,
        touched,
        isValid: !error,
    };
}

export default useFormField;