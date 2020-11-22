import React, { useState,useEffect } from 'react';
import './InputField.css';

function InputField(props) {
    const { fieldName, type, fieldLabel } = props;
    const [value, setValue] = useState("");


    return (
        <div className="inputField" >

            <input
                className="inputBox"
                value={value}
                id={fieldName}
                onChange={(e) => {
                    setValue(e.target.value);
                    props.valueGet(e.target.value,fieldName);
                }}
                type={type}
            />

            <label
                className={`inputLabel ${value ? "existValue" : null}`}
                for={fieldName}
            >
                {fieldLabel}
            </label>
        </div>
    )
}

export default InputField
