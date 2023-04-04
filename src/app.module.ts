import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://nest-mongodb:f296cd9a@localhost:27017/admin',
    ),
    TasksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
