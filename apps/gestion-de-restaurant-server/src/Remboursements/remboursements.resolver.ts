import * as graphql from "@nestjs/graphql";
import { RemboursementsService } from "./remboursements.service";

export class RemboursementsResolver {
  constructor(protected readonly service: RemboursementsService) {}
}
