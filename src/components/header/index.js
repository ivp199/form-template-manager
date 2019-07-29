import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { navItems } from '../../constants/header';
import './header.scss';

const Header = props => {

  const getNavItems = () => (
    navItems.map((item, index) => (
      <NavLink
        key={index}
        to={item.link}
        className={`nav-item nav-link ${item.className}`}
        activeClassName="nav-item-selected"
      >
        {item.label}
      </NavLink>
    ))
  )

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light header">
        <a
          className="navbar-brand"
          href="/"
        >
          <img src="/lorem-ipsum-logo.jpg" alt="" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav">
            {getNavItems()}
          </div>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
