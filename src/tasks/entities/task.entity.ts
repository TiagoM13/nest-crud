import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TasksDocument = HydratedDocument<Tasks>;

@Schema()
export class Tasks {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop()
  createdAt: Date;
}

export const TasksSchema = SchemaFactory.createForClass(Tasks);
