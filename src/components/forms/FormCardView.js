import React from 'react';
import PropTypes from 'prop-types';
import './formCardView.scss';

const FormCardView = props => {
  const { form: { displayName, description } } = props;
  return (
    <div className="card form-card-view" >
      <img src="/form-template-default.png" className="card-img-top form-card-view__image" alt="..." />

      <div className="card-body form-card-view__body">
        <div className="card-title form-card-view__title">{displayName}</div>
        <div className="card-text form-card-view__text">{description}</div>
      </div>

      <div className="card-footer form-card-view__footer">
        <button
          className='btn btn-outline-secondary form-card-view__add-item'
        >
          Add Entry
        </button>
        <button
          className='btn btn-outline-secondary form-card-view__view-item'
        >
          View Entries
        </button>
      </div>
    </div>
  );
};

FormCardView.propTypes = {};

FormCardView.defaultProps = {};

export default FormCardView;
