import { Test, TestingModule } from '@nestjs/testing';
import { MyRoutesService } from './my-routes.service';

describe('MyRoutesService', () => {
  let service: MyRoutesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MyRoutesService],
    }).compile();

    service = module.get<MyRoutesService>(MyRoutesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
