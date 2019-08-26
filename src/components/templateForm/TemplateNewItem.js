import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';
import SelectDropdown from '../select/SelectDropdown';
import FieldOptions from './FieldOptions';
import Validations from './Validations';
import { inputTypeOptions } from '../../constants/template';
import './templateNewItem.scss';

const TemplateNewItem = ({
    newItemName,
    newItemDisplayName,
    newItemType,
    onChange,
    onAddNewFieldItem,
    error,
    newSelectedItemType,
    fieldOpt,
    onFieldOptionAdd,
    onFieldOptionDelete,
    onValidationChange,
    disabled = false,
  }) => {
  let fieldOptionsElm = null;

  if (newSelectedItemType.hasOptions) {
    fieldOptionsElm = (
      <FieldOptions 
        options={fieldOpt}
        onFieldOptionAdd={onFieldOptionAdd}
        onFieldOptionDelete={onFieldOptionDelete}
      />
    )
  }

  return (
    <div className="row template-new-item">
      <InputText
        type="text"
        className="col-3 template-new-item__input"
        value={newItemName}
        onChange={value => onChange('newItemName', value)}
        placeholder="Name..."
        disabled={disabled}
        inlineError={error.fieldName}
      />
      <InputText
        type="text"
        className="col-3 template-new-item__input"
        value={newItemDisplayName}
        onChange={value => onChange('newItemDisplayName', value)}
        placeholder="Display name..."
        disabled={disabled}
        inlineError={error.displayName}
      />
      <SelectDropdown
        className='col-3 template-new-item__type-select'
        btnClassName="form-control template-new-item__type-select-btn"
        options={inputTypeOptions}
        defaultOption={newItemType}
        onSelect={value => onChange('newItemType', value)}
        placeholder="Type..."
        disabled={disabled}
        inlineError={error.type}
      />

      <div className="col-3 last-col template-field__primary-btns">
        <button
          className="btn btn-outline-secondary template-field__primary-btn"
          onClick={onAddNewFieldItem}
          disabled={disabled}
        >
          Add
        </button>
        <button
          className="btn btn-outline-secondary template-field__secondary-btn"
          onClick={() => {}}
          disabled={disabled}
        >
          Reset
        </button>
      </div>

      <div className="col-12">{fieldOptionsElm}</div>

      <div className="col-12 template-field__validations">
        <Validations
          type={newSelectedItemType}
          onValidationChange={(validation, isSelected) => onValidationChange(validation, isSelected)}
        />
      </div>
    </div>
  );
};

TemplateNewItem.propTypes = {};

TemplateNewItem.defaultProps = {};

export default TemplateNewItem;
