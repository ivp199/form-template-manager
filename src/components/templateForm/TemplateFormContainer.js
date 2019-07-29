import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid';
import arrayMove from 'array-move';
import ReactSortableHoc from '../../utils/hocs/react-sortable-hoc';
import SortableItem from '../../utils/hocs/react-sortable-item';
import DragHandle from '../../utils/hocs/react-sortable-handle';
import TemplateNameHeader from './TemplateNameHeader';
import TemplateNewItem from './TemplateNewItem';
import TemplateField from './TemplateField';
import { getTemplateById, saveTemplate } from '../../actions/templates.action';
import './templateForm.scss';

/**
* @class TemplateFormContainer
* @extends {React.Component}
*/

class TemplateFormContainer extends Component {
  state = {
    editTemplate: false,
    id: uuid.v4(),
    templateName: '',
    templateDisplayName: '',
    templateDescription: '',
    newItemName: '',
    newItemDisplayName: '',
    newItemType: {},
    newfieldOptions: [],
    // fields: [{"id":"415cf4a5-1be9-4f5a-b190-4484074a0719","sequenceId":1,"fieldName":"first_name","displayName":"First name","type":"input-text"},{"id":"22d5b124-56ee-4040-8c4b-22a1f1a36da4","sequenceId":2,"fieldName":"age","displayName":"Age","type":"input-number"},{"id":"2d0b54f4-eed2-478e-839d-b0bcb1c07cfe","sequenceId":3,"fieldName":"gender","displayName":"Gender","type":"input-radio"},{"id":"4ef637fd-cbad-4268-a40d-1f9f442e3867","sequenceId":4,"fieldName":"last_name","displayName":"Last name","type":"input-text"}],
    fields: [],
    newFieldError: '',
    template: {}
  }

  componentDidMount() {
    if (this.checkifEdit()) {
      const { templateId } = this.props.match.params;
      this.props.getTemplateById(templateId);
    }
  }

  // TODO: correct this approach
  static getDerivedStateFromProps(props, state) {
    if (state.editTemplate && props.template !== state.template && props.template && Object.keys(props.template).length) {
      const { template } = props;
      return {
        template: template,
        id: template.id,
        templateName: template.name,
        templateDisplayName: template.displayName,
        templateDescription: template.description,
        fields: template.fields
      };
    }
  }

  checkifEdit = () => {
    if (this.props.match && this.props.match.url && this.props.match.url.startsWith('/edit')) {
      this.setState({ editTemplate: true });
      return true;
    }
    return false;
  }

  onTemplateNameChange = e => {
    this.setState({ templateName: e.target.value });
  }

  onTextValueChange = (field, value) => {
    let { newfieldOptions, newItemType } = this.state;
    if (field === 'newItemType' && value.hasOptions && newItemType.text !== value.text) {
      newfieldOptions = [];
    }

    this.setState({ [field]: value, newfieldOptions });
  }

  validateField = (field) => {
    const { fieldName, displayName, type, options } = field;
    if (!fieldName || !displayName || !type) {
      return 'Please fill up all the fields.';
    }

    if (!(/^[a-z][a-z-]*[a-z]$/.test(fieldName))) {
      return 'Name Field: Only lower case alphabets and - allowed.';
    }

    if (type.hasOptions && (!options || !options.length)) {
      return `Type: Options are required for the selected type: ${type.text}`;
    }
  }

  onAddNewItem = () => {
    const { fields, newItemName, newItemDisplayName, newItemType, newfieldOptions } = this.state;

    const field =  {
      fieldName: newItemName,
      displayName: newItemDisplayName,
      type: newItemType,
    };

    if (newItemType.hasOptions && (newfieldOptions && newfieldOptions.length > 0)) {
      field.options = newfieldOptions;
    }

    const error = this.validateField(field);
    if (error) {
      this.setState({ newFieldError: error });
      return;
    } else {
      field.id = uuid.v4();
      field.sequenceId = fields.length + 1;
      const newFields = [...fields, field];

      this.setState({
        fields: newFields,
        newItemName: '',
        newItemDisplayName: '',
        newItemType: {},
        newfieldOptions: [],
        newFieldError: ''
      });
    }
  }

  onFieldItemDelete = id => {
    const newFields = this.state.fields.filter(f => f.id !== id);
    this.setState({ fields: newFields });
  }

  onFieldChange = (id, newField) => {
    const newFields = this.state.fields.map(field => {
      if (field.id === id) {
        field = newField;
      }
      return field;
    });

    this.setState({ fields: newFields });
  }

  onFieldOptionAdd = (obj) => {
    const { newfieldOptions } = this.state;
    newfieldOptions.push(obj);
    this.setState({newfieldOptions})
  }

  onFieldOptionDelete = name => {
    const { newfieldOptions } = this.state;
    const afterDeleteOptions = newfieldOptions.filter(opt => opt.name !== name);
    this.setState({ newfieldOptions: afterDeleteOptions });
  }

  onRearrange = ({oldIndex, newIndex}) => {
    this.setState({ fields: arrayMove(this.state.fields, oldIndex, newIndex) });
  }

  validateTemplate = template => {

  }

  saveTemplate = () => {
    const { templateName, templateDisplayName, templateDescription, fields } = this.state;

    const newTemplateObj = {
      name: templateName,
      displayName: templateDisplayName,
      description: templateDescription,
      fields: fields
    };

    const error = this.validateTemplate(newTemplateObj);
    if (error) {
      return;
    }

    let addedDescriotion = ' Template with fields: ';
    fields.forEach(field => {
      addedDescriotion += `${field.displayName}, `;
    });
    newTemplateObj.description += addedDescriotion.replace(/, $/, '.');
    
    this.props.saveTemplate(newTemplateObj);
  }

  renderTemplateField = () => {
    const { editTemplate } = this.state;
    // TODO: check if sorting needed
    const fieldsItems = this.state.fields.map((field, i) => (
        <SortableItem index={i}>
          <div className="row template-form__added-field-container">
            <div className="col-1 template-form__drag-handle"><DragHandle /></div>
            <div className="col-11 template-form__added-fields">
              <TemplateField
                key={field.id}
                field={field}
                onFieldChange={this.onFieldChange}
                onDelete={this.onFieldItemDelete}
                isNameDisabled={editTemplate}
              />
            </div>
          </div>
        </SortableItem>
    ));

    return (
      <ReactSortableHoc
        onSortEnd={this.onRearrange}
      >
        {fieldsItems}
      </ReactSortableHoc>
    )
  }

  renderTemplateFields = () => {
    const { fields } = this.state;

    if (fields && fields.length) {
      return (
        <div className='template-form__fields-container'>
          <label className="template-form__fields-container-label">Added Fields</label>
          {this.renderTemplateField()}
        </div>
      )
    }
  }

  render() {
    // if (this.props.templateFetchError) {
    //   return (
    //     <div className='template-form'>
    //       <p>Some Error occured while fetching the template</p>
    //     </div>
    //   )
    // }

    if (this.props.isLoading) {
      return (
        <div className='template-form'>
          <p>Loading...</p>
        </div>
      );
    }

    const {
      editTemplate,
      templateName,
      templateDescription,
      templateDisplayName,
      newItemName,
      newItemDisplayName,
      newFieldError,
      newfieldOptions,
      newItemType
    } = this.state;

    return (
      <div className='template-form'>
        <TemplateNameHeader
          templateName={templateName}
          templateDisplayName={templateDisplayName}
          templateDescription={templateDescription}
          onChange={this.onTextValueChange}
          isNameDisabled={editTemplate}
        />
        <hr />
        
        <div className="row template-form__new-field-container">
          <label className="col-2 template-form__new-label">New Item</label>
          <div className="col-10 template-form__new-field-fields">
            <TemplateNewItem
              label="New Item"
              newItemName={newItemName}
              newItemDisplayName={newItemDisplayName}
              newItemType={newItemType}
              onChange={this.onTextValueChange}
              onAddNewItem={this.onAddNewItem}
              error={newFieldError}
              newSelectedItemType={newItemType}
              fieldOpt={newfieldOptions}
              onFieldOptionAdd={this.onFieldOptionAdd}
              onFieldOptionDelete={this.onFieldOptionDelete}
            />
          </div>
          {newFieldError && <div className="col-10 offset-2 text-danger template-form__new-field-error">{newFieldError}</div>}
        </div>

        <hr />

        {this.renderTemplateFields()}

        <div className="template-form__fields-container-btn">
          <button
            className="btn btn-primary btn-block"
            onClick={this.saveTemplate}
          >
            Save Template
            </button>
        </div>
      </div>
    );
  }
}

TemplateFormContainer.propTypes = {
  template: {}
};

const mapStateToProps = state => ({
  template: state.templatesReducer.template,
  templateActionSuccesful: state.templatesReducer.templateActionSuccesful,
  templateFetchError: state.fetchErrored.fetchingError,
  isLoading: state.fetchIsLoading.isLoading,
});

// const mapStateToProps = state => {
//   debugger
//   return ({
//     templates: state.templatesReducer.templates,
//     templateFetchError: state.fetchErrored.fetchingError
//   });
// }

const mapDispatchToProps = dispatch => ({
  getTemplateById: id => dispatch(getTemplateById(id)),
  saveTemplate: template => dispatch(saveTemplate(template)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TemplateFormContainer);