import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { HydratedDocument } from 'mongoose';
import { Role } from './role.schema';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  _id: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop()
  email: string;

  @Prop({ type: raw({}) })
  user_meta: Record<string, any>;

  @Prop({ select: false })
  password: string;

  @Prop()
  created_at: Date;

  @Prop()
  updated_at: Date;

  @Prop()
  verified_at: Date;

  @Prop()
  deleted_at: Date;

  @Prop({ types: mongoose.Schema.Types.ObjectId, ref: 'Role' })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
