import { Test, TestingModule } from '@nestjs/testing';
import { ExaController } from './exa.controller';

describe('ExaController', () => {
  let controller: ExaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ExaController],
    }).compile();

    controller = module.get<ExaController>(ExaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
