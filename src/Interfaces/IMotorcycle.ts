import Ivehicle from './IVehicle';

interface IMotorcycle extends Ivehicle {
  category: 'Street' | 'Custom' | 'Trail',
  engineCapacity: number,
}

export default IMotorcycle;