import React from 'react';
import { withRouter } from "react-router";
import { Switch, Route, Link } from "react-router-dom";
import 'bootstrap';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import './App.scss';
import Home from './components/home';
import FormsContainer from './components/forms/FormsContainer';
import TemplatesContainer from './components/templates/TemplatesContainer';
import TemplateFormContainer from './components/templateForm/TemplateFormContainer';
import LoginContainer from './components/login';
import Header from './components/header';

const App = ({location}) => {
  const isFullScreen = location.pathname === '/login';

  return (
    <div className={`${!isFullScreen && 'container'} app-container`}>
      {!isFullScreen && <Header/>}
      <Route path="/" exact component={Home} />
      <Route path="/forms" component={FormsContainer} />
      <Route path="/templates" component={TemplatesContainer} />
      <Route path="/add/template" component={TemplateFormContainer} />
      <Route path="/edit/template/:templateId" component={TemplateFormContainer} />
      <Route path="/login" component={LoginContainer} />
    </div>
  );
}

export default withRouter(App);
