import Car from '../Domains/Car';
import Icar from '../Interfaces/ICar';
import CarODM from '../Models/carODM';

class CarService {
  private carODM = new CarODM();

  private createCarDomain(car: Icar): Car {
    return new Car(car);
  }

  registerCar = async (car: Icar): Promise<Car> => {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  };

  listCars = async (): Promise<Car[]> => {
    const list = await this.carODM.listCars();
    return list.map((l) => this.createCarDomain(l));
  };

  listCarById = async (id: string): Promise<Car | string> => {
    const car = await this.carODM.listCarById(id);
    if (!car) return 'NOT_FOUND';
    return this.createCarDomain(car);
  };

  editCarById = async (id: string, car: Icar): Promise<Car | string> => {
    const result = await this.carODM.editCarById(id, car);
    if (!result) return 'NOT_FOUND';
    return this.createCarDomain(result);
  };
}

export default CarService;