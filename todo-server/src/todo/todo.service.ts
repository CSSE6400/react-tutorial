import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private readonly todoRepository: Repository<Todo>,
  ) {}

  create(createTodoDto: CreateTodoDto) {
    const todo = this.todoRepository.create(createTodoDto);

    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  // update(id: number, updateTodoDto: boolean) {
  //   return `This action updates a #${id} todo`;
  // }

  remove(id: number) {
    return this.todoRepository.delete(id);
  }
}
