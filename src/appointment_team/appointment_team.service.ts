import { Injectable } from '@nestjs/common';
import { CreateAppointmentTeamDto } from './dto/create-appointment_team.dto';
import { UpdateAppointmentTeamDto } from './dto/update-appointment_team.dto';

@Injectable()
export class AppointmentTeamService {
  create(createAppointmentTeamDto: CreateAppointmentTeamDto) {
    return 'This action adds a new appointmentTeam';
  }

  findAll() {
    return `This action returns all appointmentTeam`;
  }

  findOne(id: number) {
    return `This action returns a #${id} appointmentTeam`;
  }

  update(id: number, updateAppointmentTeamDto: UpdateAppointmentTeamDto) {
    return `This action updates a #${id} appointmentTeam`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointmentTeam`;
  }
}
