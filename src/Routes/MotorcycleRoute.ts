import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';
import idValidation from '../Middlewares/idValidation';

const route = Router();

route.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);

route.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).listAllMotorcycles(),
);

route.get(
  '/:id',
  idValidation,
  (req, res, next) => new MotorcycleController(req, res, next).listMotorcycleById(),
);

route.put(
  '/:id',
  idValidation,
  (req, res, next) => new MotorcycleController(req, res, next).editById(),
);

export default route;