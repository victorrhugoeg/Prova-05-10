import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';

@Module({
  imports: [
    EpisodesModule.forRoot(),
    TypeOrmModule .forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }),
  controllers: [EpisodesController],
  providers: [EpisodesService],
})
export class EpisodesModule {}
