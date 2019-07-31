import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../input/Checkbox';
import VALIDATIONS from '../../constants/validationsTypes';

const Validations = ({ type, onValidationChange }) => {
  const { validations = []} = type;

  return (
    <div className='field-validations'>
      {
        validations.map(validation => {
          const matchingValidationKey = Object.keys(VALIDATIONS).find(val => {
            const validationObj = VALIDATIONS[val];
            return validationObj.value === validation;
          });
          const matchingValidation = VALIDATIONS[matchingValidationKey];

          return (
            <Checkbox
              label={matchingValidation.name}
              onChange={isSelected => onValidationChange(validation, isSelected)}
              disabled={false}
            />
          )
        })
      }    
    </div>
  );
};

Validations.propTypes = {};

Validations.defaultProps = {};

export default Validations;
