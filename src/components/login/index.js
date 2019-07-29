import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginComponent from '../login/LoginComponent';

import './login.scss';

/**
* @class LoginContainer
* @extends {React.Component}
*/

class LoginContainer extends Component {

  render() {
    return (
      <div className='login-container'>
        <div className="login-container__column">
          <div>
            <img
              className="mx-auto d-block login-container__logo"
              src="/lorem-ipsum-logo.jpg"
              alt="logo"
            />
            <LoginComponent />
          </div>
        </div>
      </div>
    );
  }
}

LoginContainer.propTypes = {

};

export default LoginContainer;