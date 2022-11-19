import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarsRoute from './Routes/CarRoute';
import MotorcycleRoute from './Routes/MotorcycleRoute';

const app = express();
app.use(express.json());
app.use('/cars', CarsRoute);
app.use('/motorcycles', MotorcycleRoute);
app.use(ErrorHandler.handle);

// gg wp

export default app;
