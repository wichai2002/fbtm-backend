import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LogEventsService } from './log_events.service';
import { CreateLogEventDto } from './dto/create-log_event.dto';
import { UpdateLogEventDto } from './dto/update-log_event.dto';

@Controller('log-events')
export class LogEventsController {
  constructor(private readonly logEventsService: LogEventsService) {}

  @Post()
  create(@Body() createLogEventDto: CreateLogEventDto) {
    return this.logEventsService.create(createLogEventDto);
  }

  @Get()
  findAll() {
    return this.logEventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.logEventsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLogEventDto: UpdateLogEventDto) {
    return this.logEventsService.update(+id, updateLogEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.logEventsService.remove(+id);
  }
}
