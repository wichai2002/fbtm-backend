import { PartialType } from '@nestjs/swagger';
import { CreateAppointmentTeamDto } from './create-appointment_team.dto';

export class UpdateAppointmentTeamDto extends PartialType(CreateAppointmentTeamDto) {}
