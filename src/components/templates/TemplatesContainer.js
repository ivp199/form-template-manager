import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TemplatesHeader from './TemplatesHeader';
import TemplateView from './TemplateView';
import Loader from '../loader';
import { getAllTemplates, deleteTemplate } from '../../actions/templates.action';
import './templatesContainer.scss';

/**
* @class TemplatesContainer
* @extends {React.Component}
*/

class TemplatesContainer extends Component {

  state = {
    searchText: '',
    currentlyDisplayedTemplates: [],
  }

  componentDidMount() {
    this.props.getAllTemplates();
  }

  onSearchTextChange = e => {
    const updatedTemplates = this.props.templates.filter(template => template.displayName.includes(e.target.value ));
    this.setState({searchText: e.target.value, currentlyDisplayedTemplates: updatedTemplates});
  }

  onTemplateDelete = id => {
    this.props.deleteTemplate(id);
  }

  renderTemplate = () => {
    const { currentlyDisplayedTemplates, searchText } = this.state;
    const templates = currentlyDisplayedTemplates.length > 0 || searchText
      ? this.state.currentlyDisplayedTemplates
      : this.props.templates;
    
    let elm = null;
    elm = templates.map((template, index) => (
      <TemplateView
        key={index}
        template={template}
        onDelete={() => this.onTemplateDelete(template.id)}
      />
    ));

    return elm;
  }

  render() {
    const blockname = 'templates-container';
    const { searchText } = this.state;

    if (this.props.isLoading) {
      return ( <Loader /> );
    }

    return (
      <div className={`${blockname}`}>
        <TemplatesHeader
          searchText={searchText}
          onSearchTextChange={this.onSearchTextChange}
        />

        <hr className={`${blockname}__separator`}/>

        {this.renderTemplate()}
      </div>
    );
  }
}

TemplatesContainer.propTypes = {
  
};

TemplatesContainer.defaultProps = {
  templates: []
};

const mapStateToProps = state => ({
  templates: state.templatesReducer.templates,
  templateFetchError: state.fetchErrored.fetchingError,
  isLoading: state.fetchIsLoading.isLoading,
})

const mapDispatchToProps = dispatch => ({
  getAllTemplates: () => dispatch(getAllTemplates()),
  deleteTemplate: id => dispatch(deleteTemplate(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesContainer);
