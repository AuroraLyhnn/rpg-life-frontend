import React from 'react';
import './InputField.css'

function InputField({ image, name, inputType, label, value,  ...props}) {

    return (
        <div className="input-area-component">
                <img src={image}/>
                <label htmlFor={`${name}-field`}>{label}</label>
                <input className="input-field"
                    name={`${name}`}
                    id={`${name}-field`}
                    type={inputType}
                    value={value}
                       {...props}
                />
        </div>
    );
}
export default InputField;