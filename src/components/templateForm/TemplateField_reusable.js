import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldOptions from './FieldOptions';
import InputText from '../input/InputText';
import SelectDropdown from '../select/SelectDropdown';
import { inputTypeOptions } from '../../constants/template';

import './templateField.scss';

const TemplateField = ({
  field = {},
  fieldType,
  options = [],
  onFieldChange,
  onDelete,
  onFieldOptionAdd,
  onFieldOptionDelete,
  disabled = false,
  onPrimaryBtnClick,
  primaryBtnBody,
  primaryBtnClass,
  onSecondaryBtnClick,
  secondaryBtnBody,
  secondaryBtnClass,
}) => {
  const [updatedField, setUpdatedField] = useState(field);
  let fieldOptionsElm = null;
  if (field.options && field.options.length > 0) {
    fieldOptionsElm = (
      <FieldOptions 
        options={field.options}
        onFieldOptionAdd={onFieldOptionAdd}
        onFieldOptionDelete={onFieldOptionDelete}
      />
    )
  } else if (fieldType === 'radio') {
    fieldOptionsElm = (
      <FieldOptions 
        options={options}
        onFieldOptionAdd={onFieldOptionAdd}
        onFieldOptionDelete={onFieldOptionDelete}
      />
    )
  }

  const onFieldItemChange = (text, fieldItem) => {
    setUpdatedField({...updatedField, [fieldItem]: text});
    onFieldChange(fieldItem, text);
  }

  // const onTypeSelect = (text, type) => {
  //   onFieldItemChange(text, type);
  //   fieldOptionsElm = <FieldOptions 
  //                       options={options}
  //                       onFieldOptionAdd={onFieldOptionAdd}
  //                       onFieldOptionDelete={onFieldOptionDelete}
  //                     />
  // }

  const renderType = () => {
    if (disabled) {
      return (
        <InputText
          className="col-3 template-field__input"
          value={field.type}
          disabled={true}
        />
      ) 
    }
    return (
      <SelectDropdown
        className='col-3 template-field__type-select'
        btnClassName="form-control template-field__type-select-btn"
        options={inputTypeOptions}
        defaultOption={{text: field.type}}
        // onSelect={opt => onTypeSelect(opt.text, 'type')}
        onSelect={opt => onFieldItemChange(opt.text, 'type')}

        placeholder="Field type..."
      />
    )
  }

  return (
    <div className="row align-items-center template-field">
      <InputText
        className="col-3 first-col template-field__input"
        value={field.fieldName}
        disabled={disabled}
        onChange={text => onFieldItemChange(text, 'fieldName')}
        placeholder="Name..."
      />

      <InputText
        className="col-3 template-field__input"
        value={field.displayName}
        disabled={disabled}
        onChange={text => onFieldItemChange(text, 'displayName')}
        placeholder="Display name..."
      />
      {renderType()}

      <div className="col-3 last-col template-field__primary-btns">
        <div class="template-field__primary-btn">
          <button
            className={`btn ${primaryBtnClass ? primaryBtnClass : '' }`}
            onClick={() => onPrimaryBtnClick(field.id, updatedField)}
          >
            {primaryBtnBody}
          </button>
        </div>
        <div class="template-field__secondary-btn">
        <button
            className={`btn ${secondaryBtnClass ? secondaryBtnClass : '' }`}
            onClick={() => onSecondaryBtnClick(field.id, updatedField)}
          >
            {secondaryBtnBody}
          </button>
        </div>
      </div>

      <div className="col-12">{fieldOptionsElm}</div>
    </div>
  );
};

TemplateField.propTypes = {};

TemplateField.defaultProps = {};

export default TemplateField;
