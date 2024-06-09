import * as graphql from "@nestjs/graphql";
import { RestaurantsService } from "./restaurants.service";

export class RestaurantsResolver {
  constructor(protected readonly service: RestaurantsService) {}
}
