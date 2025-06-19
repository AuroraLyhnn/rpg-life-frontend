import React from 'react';
import './InputField.css'
import Line from "../../assets/page/dark-line-s.png";

function InputField({ name, inputType, label, value, changeHandler}) {
    return (
        <>
            <label htmlFor={`${name}-field`}>{label}</label>
                <input className="input-field"
                    name={`${name}-field`}
                    id={`${name}-field`}
                    type={inputType}
                    value={value}
                    onChange={changeHandler}
                />

        </>
    );
}

export default InputField;