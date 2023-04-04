/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasksModule } from './tasks/tasks.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DATABASE_URL),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
