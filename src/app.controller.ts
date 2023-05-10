import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { CreatePersonBody } from './dtos/create-person-body';
import { PersonRepository } from './repositories/person-repository';

@Controller('app')
export class AppController {
  constructor(private personRepository: PersonRepository) {}

  @Post('routes')
  async getPerson(@Body() request: CreatePersonBody) {
    const { name, function: personFunction } = request;

    return await this.personRepository.create(name, personFunction);
  }
}
