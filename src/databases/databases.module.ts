import { Module } from '@nestjs/common';
import { DatabasesService } from './databases.service';

@Module({
  providers: [DatabasesService]
})
export class DatabasesModule {}
