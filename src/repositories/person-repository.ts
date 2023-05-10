import { CreatePersonBody } from "src/dtos/create-person-body";

export abstract class PersonRepository {
  abstract create(name: string, personFunction: string): Promise<CreatePersonBody>;
}
