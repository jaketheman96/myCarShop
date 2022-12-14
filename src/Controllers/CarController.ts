import { NextFunction, Request, Response } from 'express';
import Icar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;
  private notFoundMessage = { message: 'Car not found' };

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  public create = async (): Promise<Response | undefined> => {
    const car: Icar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.carService.registerCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  };

  public listAll = async (): Promise<Response | undefined> => {
    try {
      const list = await this.carService.listCars();
      return this.res.status(200).json(list);
    } catch (error) {
      this.next(error);
    }
  };

  public listById = async (): Promise<Response | undefined> => {
    const { id } = this.req.params;
    try {
      const response = await this.carService.listCarById(id);
      if (response === 'NOT_FOUND') {
        return this.res.status(404).json(this.notFoundMessage);
      }
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  };

  public editCarById = async (): Promise<Response | undefined> => {
    const { id } = this.req.params;
    const car: Icar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };
    try {
      const response = await this.carService.editCarById(id, car);
      if (response === 'NOT_FOUND') {
        return this.res.status(404).json(this.notFoundMessage);
      }
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  };

  public deleteCar = async (): Promise<Response | undefined> => {
    const { id } = this.req.params;
    try {
      const response = await this.carService.deleteCar(id);
      if (response === 'NOT_FOUND') return this.res.status(404).json(this.notFoundMessage);
      return this.res.status(204).json();
    } catch (error) {
      this.next(error);
    }
  };
}

export default CarController;