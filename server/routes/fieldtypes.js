import express from 'express';
import {
  getAllFieldTypes,
  getFieldTypeById,
  createFieldType
} from '../controllers/fieldtypes';
const router = express.Router();

router.get('/', getAllFieldTypes);
router.get('/:fieldTypeId', getFieldTypeById);
router.post('/', createFieldType);

// TODO: complete implemenations for below routes
// router.patch('/:templateId', updateTemplate);
// router.delete('/:templateId', deleteTemplate);

module.exports = router;