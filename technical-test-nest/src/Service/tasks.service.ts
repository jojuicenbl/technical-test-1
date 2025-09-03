import { Injectable } from '@nestjs/common';
import tasks from '../../src/data/tasks.mock.json';
import { Task } from 'src/data/task.model';

@Injectable()
export class TasksService {
  private tasks: Task[] = tasks as Task[];
  findAll() {
    const allTasks = tasks.map((task) => task.title);

    return allTasks;
  }

  // createTask(title: string) {
  //   // get all the tasks objects
  //   const allTasks: Task[] = tasks.map((task) => task);

  //   // get the last object task id
  //   const lastTask = allTasks.at(-1);
  //   const lastTaskId: number | undefined = lastTask?.id;

  //   // increment of 1 to create the new task id value
  //   const newTaskId = lastTaskId ? lastTaskId + 1 : 0;

  //   // create the new task with a title, set "completed" to false
  //   const newTask: Task = { id: newTaskId, title: title, completed: false };

  //   const pushedTask = tasks.push(newTask);

  //   return pushedTask;
  // }
  create(task: Omit<Task, 'id'>): Task {
    const maxId = Math.max(...this.tasks.map((t) => t.id), 0);
    const newTask = { id: maxId + 1, ...task };

    this.tasks.push(newTask);
    return newTask;
  }
}
