import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import CarsRoute from './Routes/CarRoute';

const app = express();
app.use(express.json());
app.use('/cars', CarsRoute);
app.use(ErrorHandler.handle);

export default app;
