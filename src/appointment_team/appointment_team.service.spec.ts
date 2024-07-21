import { Test, TestingModule } from '@nestjs/testing';
import { AppointmentTeamService } from './appointment_team.service';

describe('AppointmentTeamService', () => {
  let service: AppointmentTeamService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppointmentTeamService],
    }).compile();

    service = module.get<AppointmentTeamService>(AppointmentTeamService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
