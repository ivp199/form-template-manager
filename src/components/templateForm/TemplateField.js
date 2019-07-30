import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FieldOptions from './FieldOptions';
import InputText from '../input/InputText';
import SelectDropdown from '../select/SelectDropdown';
import { inputTypeOptions } from '../../constants/template';

import './templateField.scss';

const TemplateField = ({field, onFieldChange, disableUpdate = false, onDelete}) => {
  const [updatedField, setUpdatedField] = useState(field);
  const [isEditing, setIsEditing] = useState(false);

  const onFieldItemChange = (text, fieldItem) => {
    setUpdatedField({...updatedField, [fieldItem]: text});
  }

  const onOptionsChange = () => {

  };

  const onEditSave = () => {
    if (isEditing) {
      setIsEditing(false);
      onFieldChange(field.id, updatedField);
    } else {
      setIsEditing(true)
    }
  }

  let fieldOptionsElm = null;

  if (field.type.hasOptions && field.options && field.options.length) {
    fieldOptionsElm = (
      <FieldOptions 
        options={field.options}
        isEditable={false}
      />
    )
  }

  const renderType = () => {
    if (!isEditing) {
      return (
        <InputText
          className="col-3 template-field__input"
          value={field.type.text}
          disabled={!isEditing}
        />
      ) 
    }
    return (
      <SelectDropdown
        className='col-3 template-field__type-select'
        btnClassName="form-control template-field__type-select-btn"
        options={inputTypeOptions}
        defaultOption={{text: field.type.text}}
        onSelect={opt => onFieldItemChange(opt, 'type')}
      />
    )
  }

  return (
    <div className="row align-items-center template-field">
      <InputText
        className="col-3 template-field__input"
        value={field.fieldName}
        disabled={disableUpdate || !isEditing}
        onChange={text => onFieldItemChange(text, 'fieldName')}
      />

      <InputText
        className="col-3 template-field__input"
        value={field.displayName}
        disabled={disableUpdate || !isEditing}
        onChange={text => onFieldItemChange(text, 'displayName')}
      />
      {renderType()}

      <div className="col-3 last-col template-field__primary-btns">
        <button
          className="btn btn-outline-secondary template-field__primary-btn"
          onClick={onEditSave}
          disabled={disableUpdate}
        >
          {
            isEditing
              ? <FontAwesomeIcon icon={['far', 'save']} title="Save"/>
              : <FontAwesomeIcon icon={['far', 'edit']} title="Edit"/>
          }
        </button>
        <button
          className="btn btn-outline-secondary template-field__secondary-btn"
          onClick={() => onDelete(field.id)}
          disabled={disableUpdate}
        >
          <FontAwesomeIcon icon={['far', 'trash-alt']} />
        </button>
      </div>

      <div className="col-12">{fieldOptionsElm}</div>
    </div>
  );
};

TemplateField.propTypes = {};

TemplateField.defaultProps = {};

export default TemplateField;
