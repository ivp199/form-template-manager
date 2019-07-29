import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './error.scss';

const blockname = 'error';

const Error = ({message, status, statusText}) => {
  return (

    <div className={`card ${blockname}`} >
      <div className={`${blockname}__image-container`}>
        <div className={`${blockname}__image`}><FontAwesomeIcon icon={['far', 'frown']} title="Error"/></div>
        <span>{status} - {statusText}</span>
      </div>
      
      <div className={`${blockname}__main-container`}>
        {message}
      </div>
    </div>
  );
};

Error.propTypes = {};

Error.defaultProps = {};

export default Error;
