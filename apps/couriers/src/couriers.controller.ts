import { CouriersService } from './couriers.service';
import { Body, Controller, Post, Get, Req } from '@nestjs/common';
import { CreateCourierRequest } from './dto/create-courier.request';

@Controller('couriers')
export class CouriersController {
  constructor(private readonly couriersService: CouriersService) {}

  @Post()
  async createCourier(@Body() request: CreateCourierRequest, @Req() req: any) {
    return this.couriersService.createCourier(
      request,
      req.cookies?.Authentication,
    );
  }

  @Get()
  async getOrders() {
    return this.couriersService.getOrders();
  }
}
