import { Module } from '@nestjs/common';
import { TasksController } from 'src/Controller/tasks.controller';
import { TasksService } from 'src/Service/tasks.service';

@Module({
  imports: [],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
