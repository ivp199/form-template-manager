import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';
import arrayMove from 'array-move';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactSortableHoc from '../../utils/hocs/react-sortable-hoc';
import SortableItem from '../../utils/hocs/react-sortable-item';
import DragHandle from '../../utils/hocs/react-sortable-handle';
import TemplateNameHeader from './TemplateNameHeader';
import TemplateNewItem from './TemplateNewItem';
import TemplateField from './TemplateField_reusable';
// import TemplateField from './TemplateField-hoc';
import './templateForm.scss';

/**
* @class TemplateFormContainer
* @extends {React.Component}
*/

class TemplateFormContainer extends Component {
  state = {
    id: uuid.v4(),
    templateName: '',
    templateDescription: '',
    fields: [{"id":"415cf4a5-1be9-4f5a-b190-4484074a0719","sequenceId":1,"fieldName":"first_name","displayName":"First name","type":"input-text"},{"id":"22d5b124-56ee-4040-8c4b-22a1f1a36da4","sequenceId":2,"fieldName":"age","displayName":"Age","type":"input-number"},{"id":"2d0b54f4-eed2-478e-839d-b0bcb1c07cfe","sequenceId":3,"fieldName":"gender","displayName":"Gender","type":"input-radio"},{"id":"4ef637fd-cbad-4268-a40d-1f9f442e3867","sequenceId":4,"fieldName":"last_name","displayName":"Last name","type":"input-text"}],
    fieldName: '',
    displayName: '',
    type: '',
    // fields: [],
    newField: {},
    newFieldError: '',
    options: [],
    inEditFields: [],
  }

  onTemplateNameChange = e => {
    this.setState({ templateName: e.target.value });
  }

  onTextValueChange = (field, text) => {
    this.setState({ [field]: text });
  }

  onNewFieldChange = (newField, text) => {
    this.setState({ [newField]: text });
  }

  onFieldOptionAdd = (obj) => {
    const { options } = this.state;
    options.push(obj);
    this.setState({options})
  }

  onAddItem = () => {
    const { fields, fieldName, displayName, type, options } = this.state;
    if (!fieldName || !displayName || !type) {
      this.setState({ newFieldError: 'Please fill up all the fields ' });
      return;
    }

    const field =  {
      id: uuid.v4(),
      sequenceId: fields.length + 1,
      fieldName: fieldName,
      displayName: displayName,
      type: type,
    };

    if (options && options.length > 0) {
      field.options = options;
    }

    const newFields = [...fields, field];

    this.setState({ fields: newFields, options: [], newFieldError: '' });
  }

  onFieldItemDelete = id => {
    const newFields = this.state.fields.filter(f => f.id !== id);
    this.setState({ fields: newFields });
  }

  onAddedFieldChange = (id, newField) => {
    const newFields = this.state.fields.map(field => {
      if (field.id === id) {
        field = newField;
      }
      return field;
    });

    this.setState({ fields: newFields });
  }

  onFieldOptionDelete = name => {
    const { options } = this.state;
    const afterDeleteOptions = options.filter(opt => opt.name !== name);
    this.setState({ options: afterDeleteOptions });
  }

  onRearrange = ({oldIndex, newIndex}) => {
    this.setState({ fields: arrayMove(this.state.fields, oldIndex, newIndex) });
  }

  saveTemplate = () => {
    console.log(this.state.fields)
    
  }

  toggleEditSaveForAddedField = (id, isEditing, newField) => {
    let { inEditFields } = this.state;
    if (isEditing) {
      inEditFields = inEditFields.filter(item => item !== id);
      this.onAddedFieldChange(id, newField);
    } else {
      inEditFields.push(id);
    };

    this.setState({ inEditFields });
  }

  getButtonsForAddedField = (isEditing) => {    
    let primaryBtnBody = null;
    if (isEditing) {
      primaryBtnBody = [
        <FontAwesomeIcon icon={['far', 'save']} title="Save"/>,
        <span>{' '}Save</span>
      ]
    } else {
      primaryBtnBody = [
        <FontAwesomeIcon icon={['far', 'edit']} title="Edit"/>,
        <span>{' '}Edit</span>
      ]
    }
    const primaryBtnClass = 'btn-outline-secondary';
    
    const secondaryBtnBody = <FontAwesomeIcon icon={['far', 'trash-alt']} />;
    const secondaryBtnClass = 'btn-outline-secondary';

    return { primaryBtnBody, primaryBtnClass, secondaryBtnBody, secondaryBtnClass };
  }

  getButtonsForNewField = () => {
    const primaryBtnBody = <span>Add</span>;
    const primaryBtnClass = 'btn-primary';
    
    const secondaryBtnBody = <span>Reset</span>;
    const secondaryBtnClass = 'btn-primary';

    return { primaryBtnBody, primaryBtnClass, secondaryBtnBody, secondaryBtnClass };
  }

  renderTemplateField = () => {
    // TODO: check if sorting needed
    // const sortedFields = this.state.fields.sort((a, b) => a.sequenceId - b.sequenceId);
    const { inEditFields } = this.state;

    const fieldsItems = this.state.fields.map((field, i) => {
      const isEditing = inEditFields.includes(field.id);
      const {
        primaryBtnBody,
        primaryBtnClass,
        secondaryBtnBody,
        secondaryBtnClass
      } = this.getButtonsForAddedField(isEditing);

      return (
        <SortableItem index={i}>
          <div className="row align-items-center template-form__added-field-container">
            <div className="col-1 template-form__drag-handle"><DragHandle /></div>
            <div className="col-11 template-form__added-fields">
              <TemplateField
                key={field.id}
                field={field}
                disabled={!isEditing}
                onFieldChange={() => {}}
                onPrimaryBtnClick={(id, newField) => this.toggleEditSaveForAddedField(id, isEditing, newField)}
                primaryBtnBody={primaryBtnBody}
                primaryBtnClass={primaryBtnClass}
                onSecondaryBtnClick={() => {}}
                secondaryBtnBody={secondaryBtnBody}
                secondaryBtnClass={secondaryBtnClass}
              />
            </div>
          </div>
        </SortableItem>
      )
    });

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
          <div className="template-form__fields-container-btn">
            <button
              className="btn btn-primary btn-block"
              onClick={this.saveTemplate}
            >
              Save
              </button>
          </div>
        </div>
      )
    }
  }

  render() {
    const { newFieldError, options, newField, type } = this.state;
    const { primaryBtnBody, primaryBtnClass, secondaryBtnBody, secondaryBtnClass } = this.getButtonsForNewField();
    return (
      <div className='template-form'>
        <TemplateNameHeader
          label="Template Name"
          nameField="templateName"
          descriptionField="templateDescription"
          namePlaceholder="Enter template name..."
          descriptionPlaceholder="Description..."
          onChange={this.onTextValueChange}
        />
        <hr />

        {/* <TemplateNewItem
          label="New Item"
          newItemNameField="newItemName"
          newItemDisplayNameField="newItemDisplayName"
          newItemTypeField="newItemType"
          onChange={this.onTextValueChange}
          newItemNamePlaceholder='Name...'
          newItemDisplayNamePlaceholder='Display name...'
          newItemTypePlaceholder='Select Field type'
          onAddItem={this.onAddItem}
          error={newFieldError}
          newSelectedItemType={this.state.newItemType}
          fieldOpt={options}
          onFieldOptionAdd={this.onFieldOptionAdd}
          onFieldOptionDelete={this.onFieldOptionDelete}
        /> */}

        <div className="row template-form__new-field-container">
          <label className="col-2 template-new-item__label">New Item</label>
          <div className="col-10 template-form__new-field-fields">
            <TemplateField
              fieldType={type}
              options={options}
              onFieldChange={this.onNewFieldChange}
              onDelete={this.onFieldItemDelete}
              onFieldOptionAdd={this.onFieldOptionAdd}
              onFieldOptionDelete={this.onFieldOptionDelete}
              disabled={false}
              onPrimaryBtnClick={this.onAddItem}
              primaryBtnBody={primaryBtnBody}
              primaryBtnClass={primaryBtnClass}
              onSecondaryBtnClick={() => {}}
              secondaryBtnBody={secondaryBtnBody}
              secondaryBtnClass={secondaryBtnClass}
            />
          </div>
        </div>

        <hr />

        {this.renderTemplateFields()}
      </div>
    );
  }
}

TemplateFormContainer.propTypes = {

};

export default TemplateFormContainer;