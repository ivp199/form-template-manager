import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { sortableElement } from 'react-sortable-hoc';
import ReactSortableHoc from '../../../utils/hocs/react-sortable-hoc';
import InputText from '../../input/InputText';
import SelectDropdown from '../../select/SelectDropdown';
import { inputTypeOptions } from '../../../constants/template';

import './templateField.scss';

const TemplateField = ({field, onFieldChange, onDelete}) => {
  const [updatedField, setUpdatedField] = useState(field);
  const [isEditing, setIsEditing] = useState(false);

  const onFieldItemChange = (text, fieldItem) => {
    setUpdatedField({...updatedField, [fieldItem]: text});
  }

  const onEditSave = () => {
    if (isEditing) {
      setIsEditing(false);
      onFieldChange(field.id, updatedField);
    } else {
      setIsEditing(true)
    }
  }

  const renderType = () => {
    if (!isEditing) {
      return (
        <InputText
          className="col-3 template-field__input"
          value={field.type}
          disabled={!isEditing}
        />
      ) 
    }
    return (
      <SelectDropdown
        className='col-3 template-field__input'
        btnClassName="form-control"
        options={inputTypeOptions}
        defaultOption={{text: field.type}}
        onSelect={opt => onFieldItemChange(opt.text, 'type')}
      />
    )
  }

  return (
    <ReactSortableHoc>
      <div className="row align-items-center template-field">
        <InputText
          className="col-3 template-field__input"
          value={field.fieldName}
          disabled={!isEditing}
          onChange={text => onFieldItemChange(text, 'fieldName')}
        />

        <InputText
          className="col-3 template-field__input"
          value={field.displayName}
          disabled={!isEditing}
          onChange={text => onFieldItemChange(text, 'displayName')}
        />
        {renderType()}

        <div className="col-1 offset-1 template-field__edit-btn">
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={onEditSave}
          >
            {
              isEditing
                ? <FontAwesomeIcon icon={['far', 'save']} title="Save"/>
                : <FontAwesomeIcon icon={['far', 'edit']} title="Edit"/>
            }
            {/* {isEditing ? 'Save' : 'Edit'} */}
          </button>
        </div>
        <div className="col-1 template-field__rearrange-btn">
          <button
            className="btn btn-outline-secondary btn-block"
            onClick={() => onDelete(field.id)}
          >
            <FontAwesomeIcon icon={['far', 'trash-alt']} />
          </button>
        </div>
      </div>
    </ReactSortableHoc>
  );
};

TemplateField.propTypes = {};

TemplateField.defaultProps = {};

export default sortableElement(TemplateField);
