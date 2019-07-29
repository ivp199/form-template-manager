import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';

const FormHeader = ({label, placeholder, displayType, formSearchText, onFormSearchTextChange}) => {
  return (
    <div className='form-header'>
      {/* <InputText
        label={label}
        className="row  align-items-center form-header__input"
        value={formSearchText}
        onChange={onFormSearchTextChange}
        placeholder={placeholder}
        labelClassName='col-2'
        inputClassName='col-10'
      /> */}
    </div>
  );
};

FormHeader.propTypes = {};

FormHeader.defaultProps = {};

export default FormHeader;
