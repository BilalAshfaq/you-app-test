import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { UserInterest } from './UserInterest.schema';

@Schema()
export class User {

    @Prop({ unique: true, required: true })
    email: string;

    @Prop({ unique: true, required: true })
    userName: string;

    @Prop({ required: true })
    password: string;

    @Prop()
    displayName: string;

    @Prop()
    gender: string;

    @Prop()
    dateOfBirth: Date;

    @Prop()
    horoscope: string;

    @Prop()
    zodiac: string;

    @Prop()
    height: number;

    @Prop({ enum: ['cm', 'in'], default: 'cm' })
    heightUnit: string;

    @Prop()
    weight: number;

    @Prop({ enum: ['kg', 'lb'], default: 'kg' })
    weightUnit: string;

    @Prop()
    profileImageUrl: string;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'UserInterest' }] })
    interests: UserInterest[];
}

export const UserSchema = SchemaFactory.createForClass(User);