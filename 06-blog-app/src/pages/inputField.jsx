import "./login.css"

function InputField({ label, type='text', inputProps }) {
    return(
        <div>
            <label>
                <input className="input" type={type} placeholder={label} {...inputProps} />
            </label>
        </div>
    );
}

export default InputField;