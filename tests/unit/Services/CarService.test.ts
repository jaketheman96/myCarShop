import { expect } from 'chai';
import { describe } from 'mocha';
import { Model } from 'mongoose';
import sinon from 'sinon';
import Car from '../../../src/Domains/Car';
import Icar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/car.service';

import carMocks from './mocks/carMocks';

const { getAllCars, carById } = carMocks;

describe('Testa a camada service', () => {
  it('Verifica se o carro é registrado com sucesso', async function () {
    const carInput: Icar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput: Car = new Car({
      id: '6348513f34c397abcad040b2',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    });

    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.registerCar(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Verifica se retorna todos os carros', async function () {
    sinon.stub(Model, 'find').resolves(getAllCars);

    const service = new CarService();
    const result = await service.listCars();

    expect(result).to.be.deep.equal(getAllCars);
  });

  it('Verifica se retorna o carro encontrado pelo id', async function () {
    sinon.stub(Model, 'findOne').resolves(carById);

    const service = new CarService();
    const result = await service.listCarById('6376c10a07960ef94a103aa9');

    expect(result).to.be.deep.equal(carById);
  });
});