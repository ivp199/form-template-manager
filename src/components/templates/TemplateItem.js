import React from 'react';
import PropTypes from 'prop-types';

import './templateItem.scss';

const TemplateItem = ({ field }) => {
  return (
    <div className="row template-item">
        <div className="col-3 template-item__item">
          <span>{field.fieldName}</span>
        </div>
        <div className="col-3 offset-1 template-item__item">
          <span>{field.displayName}</span>
        </div>
        <div className="col-3 offset-1 template-item__item">
          <span>{field.type.text}</span>
        </div>
    </div>
  );
};

TemplateItem.propTypes = {};

TemplateItem.defaultProps = {};

export default TemplateItem;
