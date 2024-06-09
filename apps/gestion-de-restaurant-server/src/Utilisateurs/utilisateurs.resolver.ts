import * as graphql from "@nestjs/graphql";
import { UtilisateursService } from "./utilisateurs.service";

export class UtilisateursResolver {
  constructor(protected readonly service: UtilisateursService) {}
}
