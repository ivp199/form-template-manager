import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import './templatesHeader.scss';

const TemplatesHeader = ({ onSearchTextChange, onSearch }) => {

  return (
    <div className='row templates-header'>
      <div className="col-8 input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Type template name to search..."
          onChange={onSearchTextChange}
        />

        {/* <div className="input-group-append">
          <button
            className="btn btn-outline-secondary"
            type="button"
            onClick={onSearch}
          >
            Search
          </button>
        </div> */}
      </div>

      <div className="col-3 offset-1">
        <NavLink
          to="/add/template"
          className="btn btn-primary btn-block"
          activeClassName="nav-item-selected"
        >
          Add Template
        </NavLink>
      </div>
    </div>
  );
};
    
TemplatesHeader.propTypes = {};
      
TemplatesHeader.defaultProps = {};
      
      export default TemplatesHeader;
      
