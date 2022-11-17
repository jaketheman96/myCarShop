import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
} from 'mongoose';
import Icar from '../Interfaces/ICar';

class CarODM {
  private schema: Schema;
  private model: Model<Icar>;

  constructor() {
    this.schema = new Schema<Icar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Cars || model('Cars', this.schema);
  }

  public async create(car: Icar): Promise<Icar> {
    return this.model.create({ ...car });
  }

  public listCars = async (): Promise<Icar[]> => this.model.find();

  public listCarById = async (id: string): Promise<Icar | null | string> => {
    if (!isValidObjectId(id)) return 'INVALID_ID';
    const result = await this.model.findOne({ _id: id });
    if (result) return result;
    return null;
  };
}

export default CarODM;
