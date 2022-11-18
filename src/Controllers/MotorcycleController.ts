import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcycleService: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleService = new MotorcycleService();
  }

  public registerMotorcycle = async () => {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const response = await this.motorcycleService.registerMotorcycle(motorcycle);
      return this.res.status(201).json(response);
    } catch (error) {
      this.next(error);
    }
  };

  public listAllMotorcycles = async (): Promise<Response | undefined> => {
    try {
      const response = await this.motorcycleService.listAllMotorcycles();
      return this.res.status(200).json(response);
    } catch (error) {
      this.next(error);
    }
  };
}

export default MotorcycleController;