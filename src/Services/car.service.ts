import Car from '../Domains/car.domain';
import Icar from '../Interfaces/car.interface';
import CarODM from '../Models/carODM';

class CarService {
  private createCarDomain(car: Icar): Car | null {
    if (car) return new Car(car);
    return null;
  }

  registerCar = async (car: Icar) => {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  };
}

export default CarService;