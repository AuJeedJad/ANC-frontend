import React, { useState } from 'react';
import './inputField.css';

function InputField(props) {
  const { fieldName, type, fieldLabel } = props;
  const [value, setValue] = useState('');

  return (
    <div className="input-field">
      <input
        className="input-box"
        value={value}
        id={fieldName}
        onChange={(e) => {
          setValue(e.target.value);
          props.valueGet(e.target.value, fieldName);
        }}
        type={type}
      />

      <label className={`input-label ${value ? 'input-value--exist' : null}`} for={fieldName}>
        {fieldLabel}
      </label>
    </div>
  );
}

export default InputField;
