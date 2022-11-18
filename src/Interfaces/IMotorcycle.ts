import Ivehicle from './vehicle.interface';

interface IMotorcycle extends Ivehicle {
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}

export default IMotorcycle;