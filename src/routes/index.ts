import express from 'express';  
import { employeeRouter } from './employeRouter';

export const routes = express.Router();

routes.use('/api/employee', employeeRouter);