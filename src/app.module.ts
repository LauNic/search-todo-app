import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoController } from './todo/todo.controller';
import { SearchTodoService } from './search-todo/search-todo.service';


@Module({
  imports: [],
  controllers: [AppController, TodoController],
  providers: [AppService, SearchTodoService],
})
export class AppModule {}
