import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/User.schema';
import { UserInterest, UserInterestSchema } from 'src/schemas/UserInterest.schema';
import { Interest, InterestSchema } from 'src/schemas/Interest.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: UserInterest.name,
        schema: UserInterestSchema,
      },
      {
        name: Interest.name,
        schema: InterestSchema,
      }
    ]),
  ],
  providers: [],
  controllers: [],
})
export class UsersModule {}