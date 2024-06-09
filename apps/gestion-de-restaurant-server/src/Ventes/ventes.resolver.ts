import * as graphql from "@nestjs/graphql";
import { VentesService } from "./ventes.service";

export class VentesResolver {
  constructor(protected readonly service: VentesService) {}
}
