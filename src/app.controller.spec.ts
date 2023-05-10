import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { Request } from 'express';
import { PrismaService } from './database/prisma.service';
import { ParamsDictionary } from 'express-serve-static-core';
import QueryString from 'qs';
import { CreatePersonBody } from './dtos/create-person-body';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [PrismaService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });
  const body: CreatePersonBody = {
    name: 'carlos',
    function: 'motorista',
  };
  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await appController.getPerson(body)).toBe(name);
    });
  });
});
