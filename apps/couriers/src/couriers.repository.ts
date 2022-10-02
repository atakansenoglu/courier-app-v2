import { Injectable, Logger } from '@nestjs/common';
import { AbstractRepository } from '@app/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { Model, Connection } from 'mongoose';
import { Courier } from './schemas/courier.schema';

@Injectable()
export class CouriersRepository extends AbstractRepository<Courier> {
  protected readonly logger = new Logger(CouriersRepository.name);

  constructor(
    @InjectModel(Courier.name) courierModel: Model<Courier>,
    @InjectConnection() connection: Connection,
  ) {
    super(courierModel, connection);
  }
}
