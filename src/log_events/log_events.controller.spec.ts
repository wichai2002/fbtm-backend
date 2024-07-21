import { Test, TestingModule } from '@nestjs/testing';
import { LogEventsController } from './log_events.controller';
import { LogEventsService } from './log_events.service';

describe('LogEventsController', () => {
  let controller: LogEventsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LogEventsController],
      providers: [LogEventsService],
    }).compile();

    controller = module.get<LogEventsController>(LogEventsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
