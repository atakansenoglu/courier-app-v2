import { Injectable } from '@nestjs/common';
import { CouriersRepository } from './couriers.repository';
import { CreateCourierRequest } from './dto/create-courier.request';

@Injectable()
export class CouriersService {
  constructor(private readonly couriersRepository: CouriersRepository) {}

  async createCourier(request: CreateCourierRequest) {
    return this.couriersRepository.create(request);
  }

  async getOrders() {
    return this.couriersRepository.find({});
  }
}
