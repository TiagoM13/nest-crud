import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Tasks, TasksDocument } from './entities/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectModel(Tasks.name) private taskModel: Model<TasksDocument>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    const task = new this.taskModel(createTaskDto);
    return task.save();
  }

  findAll() {
    return this.taskModel.find();
  }

  findOne(id: string) {
    return this.taskModel.findById(id);
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateTaskDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.taskModel
      .deleteOne({
        _id: id,
      })
      .exec();
  }
}
