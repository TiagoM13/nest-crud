import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Tasks, TasksSchema } from './entities/task.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
