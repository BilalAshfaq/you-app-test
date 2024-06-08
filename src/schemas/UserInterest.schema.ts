import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class UserInterest {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  userId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Interest' })
  interestId: Types.ObjectId;
}

export const UserInterestSchema = SchemaFactory.createForClass(UserInterest);
