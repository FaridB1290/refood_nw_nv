import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RestaurantsService } from "./restaurants.service";

@swagger.ApiTags("restaurants")
@common.Controller("restaurants")
export class RestaurantsController {
  constructor(protected readonly service: RestaurantsService) {}
}
