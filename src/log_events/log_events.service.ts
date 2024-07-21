import { Injectable } from '@nestjs/common';
import { CreateLogEventDto } from './dto/create-log_event.dto';
import { UpdateLogEventDto } from './dto/update-log_event.dto';

@Injectable()
export class LogEventsService {
  create(createLogEventDto: CreateLogEventDto) {
    return 'This action adds a new logEvent';
  }

  findAll() {
    return `This action returns all logEvents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} logEvent`;
  }

  update(id: number, updateLogEventDto: UpdateLogEventDto) {
    return `This action updates a #${id} logEvent`;
  }

  remove(id: number) {
    return `This action removes a #${id} logEvent`;
  }
}
