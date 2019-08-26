import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './inputText.scss';

const InputText = props => {
  const {
    id,
    className,
    onChange,
    placeholder,
    label,
    type,
    rounderBorder,
    disabled = false,
    value,
    displayType,
    labelClassName = '',
    inputClassName = '',
    inlineError,
  } = props;
  const [text, setText] = useState(value ? value : '');

  const handleChange = e => {
    // setText(e.target.value);
    onChange(e.target.value);
  }

  let displayTypeCls = 'display-vertical';
  if (displayType === 'horizontal') {
    displayTypeCls = 'display-horizontal'
  } 

  const inputClsName = `form-control ${rounderBorder && 'rounded-border'} ${inputClassName || ''} ${inlineError ? 'is-invalid': ''} `;
  return (
    <div className={`input-text ${displayTypeCls} ${className}`}>
      {label && <label htmlFor={id} className={labelClassName}>{label}</label>}
      <input
        id={id}
        type={type || 'text'}
        value={text}
        value={value}
        disabled={disabled}
        className={inputClsName}
        placeholder={placeholder}
        onChange={handleChange}
      />

      {inlineError && <p className='inline-error'>{inlineError}</p>}
    </div>
  );
};

InputText.propTypes = {

};

InputText.defaultProps = {
  id: `input-text-${Math.floor(Math.random() * 90 + 10)}`,
};

export default InputText;
