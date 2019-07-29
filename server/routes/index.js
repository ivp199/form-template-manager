import express from 'express';
import templates from './templates';

const routes = express.Router();

routes.use('/templates', templates);

module.exports = routes;