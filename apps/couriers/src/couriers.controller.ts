import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { CreateCourierRequest } from './dto/create-courier.request';
import { CouriersService } from './couriers.service';

@Controller('couriers')
export class CouriersController {
  constructor(private readonly couriersService: CouriersService) {}

  @Post()
  async createCourier(@Body() request: CreateCourierRequest) {
    return this.couriersService.createCourier(request);
  }

  @Get()
  async getCouriers() {
    return this.couriersService.getCouriers();
  }
}
