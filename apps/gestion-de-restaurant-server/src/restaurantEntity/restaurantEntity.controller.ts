import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RestaurantEntityService } from "./restaurantEntity.service";
import { RestaurantEntityControllerBase } from "./base/restaurantEntity.controller.base";

@swagger.ApiTags("restaurantEntities")
@common.Controller("restaurantEntities")
export class RestaurantEntityController extends RestaurantEntityControllerBase {
  constructor(
    protected readonly service: RestaurantEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
