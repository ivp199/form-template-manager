import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = props => {
  const { type, label, className, onClick, roundedBorder, disabled = false } = props;
  return (
    <button
      type={type || 'button'}
      className={`btn button ${roundedBorder ? 'rounded-border' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
