import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormHeader from './FormHeader';
import FormCardView from './FormCardView';
import { templates } from '../../constants/template';
import './formsContainer.scss';

/**
* @class FormsContainer
* @extends {React.Component}
*/

class FormsContainer extends Component {

  state = {
    formSearchText: '',
    formTemplates: templates,
  }

  onFormSearchTextChange = formSearchText => {
    const newFormTemplates = templates.filter(t => t.name.toLowerCase().includes(formSearchText.toLowerCase()));
    this.setState({ formSearchText, formTemplates: newFormTemplates });
  }

  renderFormTemplates = () => {
    const { formTemplates } = this.state;

    const formElms = formTemplates.map((form, index) => (
      <FormCardView
        key={form.id}
        form={form}
      />
    ));

    return (
      <div className='form-container__forms'>
        {formElms}
      </div>
    )
  }

  render() {
    const { formSearchText } = this.state;
    return (
      <div className='form-container'>
        <FormHeader
          label='Form Name'
          placeholder='Enter form name to search...'
          formSedisplayTypearchText={formSearchText}
          onFormSearchTextChange={this.onFormSearchTextChange}
          displayType='horizontal'
        />
        <hr />
        {this.renderFormTemplates()}
      </div>
    );
  }
}

FormsContainer.propTypes = {
  
};

export default FormsContainer;