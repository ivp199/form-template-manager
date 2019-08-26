import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './selectDropdown.scss';

const SelectDropdown = props => {
  const { id, className, options, defaultOption, onSelect, label, placeholder, btnClassName, disabled=false, inlineError } = props;
  const [selectedOption, setSelectedOption] = useState(defaultOption ? defaultOption : {text: '', value: ''} );

  const onOptionClick = opt => {
    onSelect(opt);
    setSelectedOption(opt);
  }

  const getOptions = () => (
    options.map((opt, i) => (
      <button
        key={i}
        className={`dropdown-item`}
        type="button"
        onClick={() => onOptionClick(opt)}
      >
        {opt.text}
      </button>
    ))
  );

  return (
    <div className={`select-dropdown ${className}`}>
      {label && <label for={id}>{label}</label>}
      <button
        className={`btn dropdown-toggle ${btnClassName ? btnClassName : ''} ${inlineError ? 'is-invalid': ''}`}
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        disabled={disabled}
      >
        {selectedOption.text || placeholder}
      </button>

      {inlineError && <p className='inline-error'>{inlineError}</p>}

      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {getOptions()}
      </div>
      
    </div>
  );
};

SelectDropdown.propTypes = {};

SelectDropdown.defaultProps = {
  id: `select-dropdown-${Math.floor(Math.random() * 90 + 10)}`,
};

export default SelectDropdown;
