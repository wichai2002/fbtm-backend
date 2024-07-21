import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentTeamController } from './appointment_team.controller';
import { AppointmentTeamService } from './appointment_team.service';

describe('AppointmentTeamController', () => {
  let controller: AppointmentTeamController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AppointmentTeamController],
      providers: [AppointmentTeamService],
    }).compile();

    controller = module.get<AppointmentTeamController>(AppointmentTeamController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
