import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AppointmentTeamService } from './appointment_team.service';
import { CreateAppointmentTeamDto } from './dto/create-appointment_team.dto';
import { UpdateAppointmentTeamDto } from './dto/update-appointment_team.dto';

@Controller('appointment-team')
export class AppointmentTeamController {
  constructor(private readonly appointmentTeamService: AppointmentTeamService) {}

  @Post()
  create(@Body() createAppointmentTeamDto: CreateAppointmentTeamDto) {
    return this.appointmentTeamService.create(createAppointmentTeamDto);
  }

  @Get()
  findAll() {
    return this.appointmentTeamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appointmentTeamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAppointmentTeamDto: UpdateAppointmentTeamDto) {
    return this.appointmentTeamService.update(+id, updateAppointmentTeamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.appointmentTeamService.remove(+id);
  }
}
