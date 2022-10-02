import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { MESSAGING_SERVICE } from 'apps/couriers/src/constants/service';
import { CouriersRepository } from './couriers.repository';
import { CreateCourierRequest } from './dto/create-courier.request';

@Injectable()
export class CouriersService {
  constructor(
    private readonly couriersRepository: CouriersRepository,
    @Inject(MESSAGING_SERVICE) private messagingClient: ClientProxy,
  ) {}

  async createCourier(request: CreateCourierRequest) {
    const session = await this.couriersRepository.startTransaction();
    try {
      const courier = await this.couriersRepository.create(request, {
        session,
      });
      await lastValueFrom(
        this.messagingClient.emit('courier_created', {
          request,
        }),
      );
      await session.commitTransaction();
      return courier;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    }
  }

  async getCouriers() {
    return this.couriersRepository.find({});
  }
}
