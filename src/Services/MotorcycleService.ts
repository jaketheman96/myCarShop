import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private motorcycleODM = new MotorcycleODM();
  private notFound = 'NOT_FOUND';
  private createMotorcycleDomain(motorcycle: IMotorcycle): Motorcycle {
    return new Motorcycle(motorcycle);
  }

  public registerMotorcycle = async (motorcycle: IMotorcycle): Promise<Motorcycle> => {
    const result = await this.motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(result);
  };

  public listAllMotorcycles = async (): Promise<Motorcycle[]> => {
    const result = await this.motorcycleODM.listAllMotorcycles();
    return result.map((r) => this.createMotorcycleDomain(r));
  };

  public listMotorcycleById = async (id: string): Promise<Motorcycle | string> => {
    const result = await this.motorcycleODM.listMotorcycleById(id);
    if (!result) return this.notFound;
    return this.createMotorcycleDomain(result);
  };

  public editById = async (id: string, motorcycle: IMotorcycle): Promise<Motorcycle | string> => {
    const result = await this.motorcycleODM.editById(id, motorcycle);
    if (!result) return this.notFound;
    return this.createMotorcycleDomain(result);
  };
}

export default MotorcycleService;