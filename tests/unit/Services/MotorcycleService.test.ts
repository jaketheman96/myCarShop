import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import MotorcycleMocks from './mocks/motorcycleMocks';

const { motorcycleInput, motorcycleOutput, allMotorcycles } = MotorcycleMocks;
const service = new MotorcycleService();

describe('Testa a camada Motorcycle Service', () => {
  it('Testa se Motorcycle é registrado com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    const result = await service.registerMotorcycle(motorcycleInput);

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Testa se é retornado todos os Motorcycles', async function () {
    sinon.stub(Model, 'find').resolves(allMotorcycles);

    const result = await service.listAllMotorcycles();

    expect(result).to.be.deep.equal(allMotorcycles);
  });

  it('Testa o método list motorcycle by id', async function () {
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    const result = await service.listMotorcycleById('6348513f34c397abcad040b2');

    expect(result).to.be.deep.equal(motorcycleOutput);
  });

  it('Testa o método list motorcycle by id em caso de not found', async function () {
    sinon.stub(Model, 'findById').resolves(null);

    const result = await service.listMotorcycleById('6348513f34c397abcad040b999999');

    expect(result).to.be.deep.equal('NOT_FOUND');
  });

  afterEach(function () {
    return sinon.restore();
  });
});