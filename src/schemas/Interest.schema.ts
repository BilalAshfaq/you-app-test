import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Interest {
  @Prop({ required: true })
  interestName: string;
}

export const InterestSchema = SchemaFactory.createForClass(Interest);