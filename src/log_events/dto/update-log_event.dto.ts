import { PartialType } from '@nestjs/swagger';
import { CreateLogEventDto } from './create-log_event.dto';

export class UpdateLogEventDto extends PartialType(CreateLogEventDto) {}
