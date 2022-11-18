import { Router } from 'express';
import CarController from '../Controllers/car.controller';
import idValidation from '../Middlewares/idValidation';

const routes = Router();

routes.post(
  '/',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/',
  (req, res, next) => new CarController(req, res, next).listAll(),
);

routes.get(
  '/:id',
  idValidation,
  (req, res, next) => {
    new CarController(req, res, next).listById();
  },
);

export default routes;