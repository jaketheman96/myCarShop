import { model, Model, models, Schema } from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleODM {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycle || model('Motorcycle', this.schema);
  }

  public async create(motorcycle: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...motorcycle });
  }

  public listAllMotorcycles = async (): Promise<IMotorcycle[]> => this.model.find();

  public listMotorcycleById = async (id: string): Promise<IMotorcycle | null> => {
    const result = await this.model.findById(id);
    if (result) return result;
    return null;
  };

  public editById = async (id: string, motorcycle: IMotorcycle): Promise<IMotorcycle | null> => {
    const result = await this.model.findByIdAndUpdate(id, motorcycle, { new: true });
    if (result) return result;
    return null;
  };

  public deleteMotorcycle = async (id: string): Promise<IMotorcycle | null> => {
    const result = await this.model.findByIdAndDelete(id);
    if (result) return result;
    return null;
  };
}

export default MotorcycleODM;