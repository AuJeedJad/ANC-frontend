import React, { useState, useEffect } from 'react';
import './inputField.css';

function InputField(props) {
  const { fieldName, type, fieldLabel } = props;
  const [value, setValue] = useState('');
  const [alertMsg, setAlertMsg] = useState('');
  useEffect(() => {
    let msg = '';
    if (value) {
      let pre = '';
      if (props.valueFormat) {
        if (props.valueFormat === 'number') {
          msg += isNaN(value) ? 'ต้องเป็นตัวเลขเท่านั้น' : '';
        }
      }
      if (props.valueLengthMin) {
        pre = msg ? ' และ' : '';
        msg += value.length < props.valueLengthMin ? `${pre}ต้องไม่ต่ำกว่า ${props.valueLengthMin} ตัวอักษร` : '';
      }
      if (props.valueLengthMax) {
        pre = msg ? ' และ' : '';
        msg += value.length > props.valueLengthMax ? `${pre}ต้องไม่เกิน ${props.valueLengthMax} ตัวอักษร` : '';
      }
    } else {
      msg = ' ';
    }
    setAlertMsg(msg);
    props.valueGet(value, props.fieldName, msg);
  }, [value]);

  useEffect(() => {
    if (props.clear === true) setValue('');
  }, [props.clear]);

  return (
    <div className="input-field">
      <input
        className="input-box"
        value={value}
        id={fieldName}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type={type}
      />

      <label className={`input-label ${value ? 'input-value--exist' : null}`} for={fieldName}>
        {fieldLabel}
        {alertMsg ? <p className="alertMsg"> {alertMsg}</p> : null}
      </label>
    </div>
  );
}

export default InputField;
