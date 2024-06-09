import * as graphql from "@nestjs/graphql";
import { PaniersService } from "./paniers.service";

export class PaniersResolver {
  constructor(protected readonly service: PaniersService) {}
}
