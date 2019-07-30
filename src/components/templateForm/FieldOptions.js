import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';
import Button from '../button/Button';

import './fieldOptions.scss';

const FieldOptions = props => {
  const { options = [], onFieldOptionAdd, onFieldOptionDelete, isEditable = true } = props;
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const onAdd = () => {
    if (!name || !value) {
      return;
    }

    setName('');
    setValue('');
    onFieldOptionAdd({name, value});
  }

  const renderAddedOptions = () => {
    let elms = null;
    elms = options.map((opt, i) => (
      <div className="row align-items-center field-options__added-option" key={i}>
      <div className="col-2 offset-1 field-options__label">Added Options</div>
        <InputText
          className="col-3 field-options__input"
          value={opt.name}
          disabled
        />

        <InputText
          className="col-3 field-options__input"
          value={opt.value}
          disabled
        />

        {isEditable && <div className="col-2 field-options__button">
          <Button
            label={'Delete'}
            onClick={() => onFieldOptionDelete(opt.name)}
            className="btn-secondary"
          />
        </div>}
      </div>
    ));

    return elms;
  }

  const renderInputs = () => {
    if (!isEditable) {
      return null;
    }
    return (
      <div className="row align-items-center field-options__add-option">
      <div className="col-2 offset-1 field-options__label">Add Option</div>
        <InputText
          className="col-3 field-options__input"
          value={name}
          onChange={text => setName(text)}
          placeholder="Display Text"
        />

        <InputText
          className="col-3 field-options__input"
          value={value}
          onChange={text => setValue(text)}
          placeholder="Value text"

        />

        <div className="col-2 field-options__button">
          <Button
            label={'Add'}
            onClick={onAdd}
            className="btn-secondary"
            disabled={!name || !value}
          />
        </div>
      </div>
    )
  }

  return (
    <div className='field-options'>
      {renderInputs()}
      {renderAddedOptions()}
    </div>
  );
};

FieldOptions.propTypes = {};

FieldOptions.defaultProps = {};

export default FieldOptions;
