import Car from '../Domains/Car';
import Icar from '../Interfaces/ICar';
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