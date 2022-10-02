import { Controller, Get } from '@nestjs/common';
import { Ctx, EventPattern, Payload, RmqContext } from '@nestjs/microservices';
import { RmqService } from '@app/common';
import { MessagingService } from './messaging.service';

@Controller()
export class MessagingController {
  constructor(
    private readonly messagingService: MessagingService,
    private readonly rmqService: RmqService,
  ) {}

  @Get()
  getHello(): string {
    return this.messagingService.getHello();
  }

  @EventPattern('courier_created')
  async handleOrderCreated(@Payload() data: any, @Ctx() context: RmqContext) {
    this.messagingService.message(data);
    this.rmqService.ack(context);
  }
}
