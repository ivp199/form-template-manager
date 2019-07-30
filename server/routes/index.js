import express from 'express';
import templates from './templates';
import fieldtypes from './fieldtypes';

const routes = express.Router();

routes.use('/templates', templates);
routes.use('/fieldtypes', fieldtypes);

module.exports = routes;