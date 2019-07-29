import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import TemplateItem from './TemplateItem';
import './templateView.scss';

const TemplateView = ({ template, onDelete }) => {
  return (
    <div className='template-view'>
      <button
        className="btn btn-outline-secondary template-view__name"
        type="button"
        data-toggle="collapse"
        data-target={`#template-${template.id}`}
      >
        {template.displayName} <span>{' '}({template.name})</span>
        {/* <i className="fa fa-angle-down"></i> */}
      </button>
      <div
        className="collapse"
        id={`template-${template.id}`}
      >
        <div className="card card-body template-view__body">
          <div className="template-view__description">
            {template.description}
          </div>
          <hr />
          {
            template.fields.map((field, key) => <TemplateItem key={key} field={field} />)
          }          
          <hr />

          <div className="row template-view__cta-container">
            <NavLink
              to={`/edit/template/${template.id}`}
              className="col-2 offset-7 btn btn-outline-secondary template-view__edit-btn"
              activeClassName="nav-item-selected"
            >
              Edit
            </NavLink>

            <button
              className="col-2 offset-1 btn btn-outline-danger template-view__delete-btn"
              type="button"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TemplateView.propTypes = {};

TemplateView.defaultProps = {};

export default TemplateView;
