import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './checkbox.scss';

const Checkbox = props => {
  const {
    id,
    className,
    onChange,
    label,
    disabled = false,
    value
  } = props;

  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setChecked(value);
    onChange(value);
  }

  return (
    <div className={`input-checkbox ${className ? className : ''}`}> 
      <input
        id={id}
        type="checkbox"
        checked={value || checked}
        onChange={handleChange}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

Checkbox.propTypes = {};

Checkbox.defaultProps = {
  id: `input-checkbox-${Math.floor(Math.random() * 90 + 10)}`,
};

export default Checkbox;
