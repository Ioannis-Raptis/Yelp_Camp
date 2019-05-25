import { Test, TestingModule } from '@nestjs/testing';
import { CampgroundsController } from './campgrounds.controller';

describe('Campground Controller', () => {
  let controller: CampgroundsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CampgroundsController],
    }).compile();

    controller = module.get<CampgroundsController>(CampgroundsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
