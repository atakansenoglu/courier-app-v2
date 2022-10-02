import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CouriersController } from './couriers.controller';
import { CouriersService } from './couriers.service';
import * as Joi from 'joi';
import { DatabaseModule, RmqModule } from '@app/common';
import { CouriersRepository } from './couriers.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Courier, CourierSchema } from './schemas/courier.schema';
import { MESSAGING_SERVICE } from './constants/service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        MONGODB_URI: Joi.string().required(),
        PORT: Joi.number().required(),
      }),
      envFilePath: './apps/couriers/.env',
    }),
    DatabaseModule,
    MongooseModule.forFeature([{ name: Courier.name, schema: CourierSchema }]),
    RmqModule.register({
      name: MESSAGING_SERVICE,
    }),
    CacheModule.register({
      isGlobal: true,
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  controllers: [CouriersController],
  providers: [CouriersService, CouriersRepository],
})
export class CouriersModule {}
