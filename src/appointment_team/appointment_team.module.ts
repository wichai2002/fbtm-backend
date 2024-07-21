import { Module } from '@nestjs/common';
import { AppointmentTeamService } from './appointment_team.service';
import { AppointmentTeamController } from './appointment_team.controller';

@Module({
  controllers: [AppointmentTeamController],
  providers: [AppointmentTeamService],
})
export class AppointmentTeamModule {}
