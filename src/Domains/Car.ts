import Icar from '../Interfaces/ICar';
import Vehicle from './vehicle.domain';

class Car extends Vehicle {
  private doorsQty: number;
  private seatsQty: number;

  constructor(car: Icar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;