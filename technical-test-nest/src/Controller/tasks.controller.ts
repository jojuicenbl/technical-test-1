import { Controller, Get, Post } from '@nestjs/common';
import { TasksService } from 'src/Service/tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): any[] {
    const allTasks = this.tasksService.findAll();

    return allTasks;
  }

  @Post()
  createTask(title: string) {
    const createdTask = this.tasksService.createTask(title);

    return createdTask;
  }
}
