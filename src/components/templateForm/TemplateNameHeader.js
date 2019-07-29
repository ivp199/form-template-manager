import React from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';

import './templateNameHeader.scss';

const TemplateNameHeader = ({templateName, templateDisplayName, templateDescription, isNameDisabled = false, onChange}) => {
  return (
    <div className="row align-items-center template-name-header">
      <label
        htmlFor="#templateName"
        className="col-2 template-name-header__label"
      >
        Template Name
      </label>
      <InputText
        type="text"
        value={templateName}
        className="col-10 template-name-header__input"
        onChange={value => onChange('templateName', value)}
        placeholder="Template name..."
        disabled={isNameDisabled}
      />

      <label
        htmlFor="#templateName"
        className="col-2 template-name-header__label"
      >
        Display Name
      </label>
      <InputText
        type="text"
        value={templateDisplayName}
        className="col-10 template-name-header__input"
        onChange={value => onChange('templateDisplayName', value)}
        placeholder="Template name..."
      />

      <label
        htmlFor="#templateName"
        className="col-2 template-name-header__label"
      >
        Description
      </label>
      <InputText
        type="text"
        className="col-10 col-offset-3 template-name-header__input"
        value={templateDescription}
        onChange={value => onChange('templateDescription', value)}
        placeholder="Description"
      />
    </div>
  );
};

TemplateNameHeader.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

TemplateNameHeader.defaultProps = {};

export default TemplateNameHeader;
