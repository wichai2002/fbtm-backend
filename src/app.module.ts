import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasesModule } from './databases/databases.module';
import { AdministratorsModule } from './administrators/administrators.module';
import { PlayersModule } from './players/players.module';
import { UsersModule } from './users/users.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { AppointmentTeamModule } from './appointment_team/appointment_team.module';
import { LogEventsModule } from './log_events/log_events.module';

@Module({
  imports: [DatabasesModule, AdministratorsModule, PlayersModule, UsersModule, AppointmentsModule, AppointmentTeamModule, LogEventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
