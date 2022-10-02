import { Controller, Get } from '@nestjs/common';
import { CouriersService } from './couriers.service';

@Controller()
export class CouriersController {
  constructor(private readonly couriersService: CouriersService) {}

  @Get()
  getHello(): string {
    return this.couriersService.getHello();
  }
}
