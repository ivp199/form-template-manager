import express from 'express';
import {
  getAllTemplates,
  getTemplateById,
  saveTemplate,
  updateTemplate,
  deleteTemplate
} from '../controllers/templates';
const router = express.Router();

router.get('/', getAllTemplates);
router.get('/:templateId', getTemplateById);
router.patch('/:templateId', updateTemplate);
router.post('/', saveTemplate);
router.delete('/:templateId', deleteTemplate);

module.exports = router;