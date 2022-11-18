import { Router } from 'express';
import CarController from '../Controllers/CarController';
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

routes.put(
  '/:id',
  idValidation,
  (req, res, next) => {
    new CarController(req, res, next).editCarById();
  },
);

routes.delete(
  '/:id',
  idValidation,
  (req, res, next) => {
    new CarController(req, res, next).deleteCar();
  },
);

export default routes;