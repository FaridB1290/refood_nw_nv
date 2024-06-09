import * as graphql from "@nestjs/graphql";
import { AnnulationsService } from "./annulations.service";

export class AnnulationsResolver {
  constructor(protected readonly service: AnnulationsService) {}
}
