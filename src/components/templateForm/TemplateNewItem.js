import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';
import SelectDropdown from '../select/SelectDropdown';
import FieldOptions from './FieldOptions';
import { inputTypeOptions } from '../../constants/template';
import './templateNewItem.scss';

const TemplateNewItem = ({
    // newItemNameField,
    // newItemDisplayNameField,
    // newItemTypeField,
    newItemName,
    newItemDisplayName,
    newItemType,
    onChange,
    onAddNewItem,
    error,
    newSelectedItemType,
    fieldOpt,
    onFieldOptionAdd,
    onFieldOptionDelete,
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
    <div className="row align-items-center template-new-item">
      <InputText
        type="text"
        className="col-3 template-new-item__input"
        value={newItemName}
        onChange={value => onChange('newItemName', value)}
        placeholder="Name..."
        disabled={disabled}
      />
      <InputText
        type="text"
        className="col-3 template-new-item__input"
        value={newItemDisplayName}
        onChange={value => onChange('newItemDisplayName', value)}
        placeholder="Display name..."
        disabled={disabled}
      />
      <SelectDropdown
        className='col-3 template-new-item__type-select'
        btnClassName="form-control template-new-item__type-select-btn"
        options={inputTypeOptions}
        defaultOption={newItemType}
        onSelect={value => onChange('newItemType', value)}
        placeholder="Type..."
        disabled={disabled}
      />

      <div className="col-3 last-col template-field__primary-btns">
        <button
          className="btn btn-outline-secondary template-field__primary-btn"
          onClick={onAddNewItem}
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
    </div>
  );
};

TemplateNewItem.propTypes = {};

TemplateNewItem.defaultProps = {};

export default TemplateNewItem;
