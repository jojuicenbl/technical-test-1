import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTaskDto } from 'src/data/create-task.dto';
import type { Task } from 'src/data/task.model';
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
  create(@Body() task: CreateTaskDto): Task {
    return this.tasksService.create(task);
  }
}
