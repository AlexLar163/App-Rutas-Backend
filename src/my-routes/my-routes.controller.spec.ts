import { Test, TestingModule } from '@nestjs/testing';
import { MyRoutesController } from './my-routes.controller';

describe('MyRoutesController', () => {
  let controller: MyRoutesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MyRoutesController],
    }).compile();

    controller = module.get<MyRoutesController>(MyRoutesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
