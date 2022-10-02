import { NestFactory } from '@nestjs/core';
import { CouriersModule } from './couriers.module';

async function bootstrap() {
  const app = await NestFactory.create(CouriersModule);
  await app.listen(3000);
}
bootstrap();
