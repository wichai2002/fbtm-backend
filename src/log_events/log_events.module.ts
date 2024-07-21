import { Module } from '@nestjs/common';
import { LogEventsService } from './log_events.service';
import { LogEventsController } from './log_events.controller';

@Module({
  controllers: [LogEventsController],
  providers: [LogEventsService],
})
export class LogEventsModule {}
