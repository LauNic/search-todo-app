import { Test, TestingModule } from '@nestjs/testing';
import { SearchTodoService } from './search-todo.service';

describe('SearchTodoService', () => {
  let service: SearchTodoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SearchTodoService],
    }).compile();

    service = module.get<SearchTodoService>(SearchTodoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
