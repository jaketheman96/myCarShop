import Car from '../Domains/Car';
import Icar from '../Interfaces/ICar';
import CarODM from '../Models/carODM';

class CarService {
  private carODM = new CarODM();

  private createCarDomain(car: Icar): Car {
    return new Car(car);
  }

  registerCar = async (car: Icar) => {
    const newCar = await this.carODM.create(car);
    return this.createCarDomain(newCar);
  };

  listCars = async (): Promise<Car[]> => {
    const list = await this.carODM.listCars();
    return list.map((l) => this.createCarDomain(l));
  };
}

export default CarService;