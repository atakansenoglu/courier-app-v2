import { Test, TestingModule } from '@nestjs/testing';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';

describe('CouriersController', () => {
  let couriersController: CouriersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CouriersController],
      providers: [CouriersService],
    }).compile();

    couriersController = app.get<CouriersController>(CouriersController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(couriersController.getHello()).toBe('Hello World!');
    });
  });
});
