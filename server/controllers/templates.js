import mongoose from "mongoose";
import Template from '../models/template';
import { templates } from '../../mocks/templates';

export const getAllTemplates = (req, res) => {
  Template
    .find()
    .exec()
    .then(results => {
      const output = {
        count: results.length,
        templates: results.map(result => ({
          id: result._id,
          name: result.name,
          displayName: result.displayName,
          description: result.description,
          // fields: result.fields.map(field => {
          //   field.id = field._id;
          //   delete field._id;
          //   return field;
          // }),
          fields: result.fields,
        }))
      };
      res.status(200).json({ ...output })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
};

export const getTemplateById = (req, res) => {
  const templateId = req.params.templateId;
  
  Template
    .findById(templateId)
    .exec()
    .then(result => {
      if (result) {
        const newTemplateObj = {
          id: result._id,
          name: result.name,
          displayName: result.displayName,
          description: result.description,
          fields: result.fields,
        }
        res.status(200).json({ template: newTemplateObj });
      } else {
        res.status(404).json({
          message: `No template found for the given id: ${templateId}.`
        });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

export const saveTemplate = (req, res) => {
  const { template } = req.body;

  Template
    .findOne({ name: template.name })
    .exec()
    .then(existingTemplate => {
      if (existingTemplate) {
        res.status(400).json({
          error: `Template with name: ${template.name} already exists. Use some different name.`
        })
      } else {
        const templateObj = new Template({
          _id: mongoose.Types.ObjectId(),
          name: template.name,
          displayName: template.displayName,
          description: template.description,
          fields: template.fields
        });
      
        templateObj
          .save()
          .then(result => {
            res.status(200).json({
              message: `New template created with id ${result._id}.`
            });
          })
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}

export const updateTemplate = (req, res) => {

}

export const deleteTemplate = (req, res) => {
  const templateId = req.params.templateId;
  
  Template.deleteOne({ _id: templateId })
    .exec()
    .then(result => {
      res.status(200).json({
        message: `Template  with id ${result._id} deleted.`
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });;
}