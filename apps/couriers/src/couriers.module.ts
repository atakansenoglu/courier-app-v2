import { Module } from '@nestjs/common';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';

@Module({
  imports: [],
  controllers: [CouriersController],
  providers: [CouriersService],
})
export class CouriersModule {}
