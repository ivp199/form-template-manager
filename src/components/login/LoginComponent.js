import React, { useState } from 'react';
import PropTypes from 'prop-types';
import InputText from '../input/InputText';
import Button from '../button/Button';

import './loginComponent.scss';

const LoginComponent = props => {
  const [username, setUsername] = useState('');
  const [password, usePassword] = useState('');

  const onLogin = () => {
    console.log(username, password);
  }

  return (
    <div className="login-component">
      <form>
        <InputText
          label="Username"
          placeholder="Enter username"
          onChange={setUsername}
          type="text"
          rounderBorder
        />

        <InputText
          label="Password"
          placeholder="Enter password"
          onChange={usePassword}
          type="password"
          rounderBorder
        />
        
        < hr className='login-component__separator' />

        <Button
          label="Login"
          className="btn-primary btn-block rounder-border login-component__button"
          onClick={onLogin}
          rounderBorder
        />
      </form>
    </div>
  );
};

LoginComponent.propTypes = {};

LoginComponent.defaultProps = {};

export default LoginComponent;
