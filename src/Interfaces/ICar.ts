import Ivehicle from './vehicle.interface';

interface Icar extends Ivehicle {
  doorsQty: number,
  seatsQty: number,
}

export default Icar;