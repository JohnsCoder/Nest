import { PrismaService } from 'src/database/prisma.service';
import { PersonRepository } from '../person-repository';
import { randomUUID } from 'node:crypto';
import { Injectable } from '@nestjs/common';
import { CreatePersonBody } from 'src/dtos/create-person-body';

@Injectable()
export class PrismaPersonRepository extends PersonRepository {
  constructor(private prisma: PrismaService) {
    super();
  }
  async create(name: string, personFunction: string) {
    return await this.prisma.person.create({
      data: {
        id: randomUUID(),
        name: name,
        function: personFunction,
      },
    });
  }
}
