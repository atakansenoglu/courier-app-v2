import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '@app/common';

@Schema({ versionKey: false })
export class Courier extends AbstractDocument {
  @Prop()
  courierId: string;

  @Prop()
  latitude: string;

  @Prop()
  longitude: string;
}

export const CourierSchema = SchemaFactory.createForClass(Courier);
