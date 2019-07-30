import mongoose from "mongoose";
import FieldType from '../models/fieldtype';

export const getAllFieldTypes = (req, res) => {
  FieldType
    .find()
    .exec()
    .then(documents => {
      const output = {
        count: documents.length,
        fieldTypes: documents.map(doc => ({
          id: doc._id,
          text: doc.text,
          description: doc.description || '',
          hasOptions: doc.hasOptions || false,
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
}

export const getFieldTypeById = (req, res) => {
  const fieldTypeId = req.params.fieldTypeId;

  FieldType
    .findById({ _id: fieldTypeId })
    .exec()
    .then(doc => {
      if (doc) {
        const newObj = {
          id: doc._id,
          text: doc.text,
          description: doc.description || '',
          hasOptions: doc.hasOptions || false,
        }
        res.status(200).json({ fieldType: newObj });
      } else {
        res.status(404).json({
          error: {
            message: `No fieldType found for the given id: ${fieldTypeId}.`
          }
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

export const createFieldType = (req, res) => {
  const { fieldType } = req.body;

  FieldType
    .findOne({ text: fieldType.text })
    .exec()
    .then(existingTemplate => {
      if (existingTemplate) {
        return res.status(400).json({
          error: {
            message: `FieldType with text: ${fieldType.text} already exists. Use some different text.`
          }
        })
      }

      const fieldTypeObj = new FieldType({
        _id: mongoose.Types.ObjectId(),
        text: fieldType.text,
        description: fieldType.description || '',
        hasOptions: fieldType.hasOptions || false,
      });
    
      fieldTypeObj
        .save()
        .then(result => {
          res.status(200).json({
            error: {
              message: `New FieldType created with id ${result._id}.`
            }
          });
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
}