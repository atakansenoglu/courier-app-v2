import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';
import * as Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { CouriersRepository } from './couriers.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Courier, CourierSchema } from './schemas/courier.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/orders/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Courier.name, schema: CourierSchema }]),
  ],
  controllers: [CouriersController],
  providers: [CouriersService, CouriersRepository],
})
export class CouriersModule {}
