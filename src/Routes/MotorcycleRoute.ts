import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const route = Router();

route.post(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).registerMotorcycle(),
);

route.get(
  '/',
  (req, res, next) => new MotorcycleController(req, res, next).listAllMotorcycles(),
);

export default route;