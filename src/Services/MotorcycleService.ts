import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private motorcycleODM = new MotorcycleODM();
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public registerMotorcycle = async (motorcycle: IMotorcycle): Promise<Motorcycle> => {
    const result = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(result);
  };

  public listAllMotorcycles = async () => { 
    const result = await this.motorcycleODM.listAllMotorcycles();
    return result.map((r) => this.createMotorcycleDomain(r));
  };
}

export default MotorcycleService;