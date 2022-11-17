import Icar from '../Interfaces/car.interface';
import Vehicle from './vehicle.domain';

class Car extends Vehicle {
  protected doorsQty: number;
  protected seatsQty: number;

  constructor(car: Icar) {
    super(car);
    this.doorsQty = car.doorsQty;
    this.seatsQty = car.seatsQty;
  }
}

export default Car;