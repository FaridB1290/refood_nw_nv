import * as graphql from "@nestjs/graphql";
import { AuthentificationService } from "./authentification.service";

export class AuthentificationResolver {
  constructor(protected readonly service: AuthentificationService) {}
}
