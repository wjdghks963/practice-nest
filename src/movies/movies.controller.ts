import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'this will returjn all movies';
  }
  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return 'this will return a movie';
  }

  @Post()
  create() {
    return 'this will  create movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `this will delete movie id ${movieId}`;
  }

  @Patch('/:id')
  path(@Param('id') movieId: string) {
    return `${movieId}`;
  }
}
