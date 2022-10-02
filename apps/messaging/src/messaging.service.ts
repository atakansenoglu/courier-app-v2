import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class MessagingService {
  private readonly logger = new Logger(MessagingService.name);

  getHello(): string {
    return 'Hello World!';
  }

  message(data: any) {
    this.logger.log('Messaging...', data);
  }
}
