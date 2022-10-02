import { Injectable } from '@nestjs/common';

@Injectable()
export class CouriersService {
  getHello(): string {
    return 'Hello World!';
  }
}
