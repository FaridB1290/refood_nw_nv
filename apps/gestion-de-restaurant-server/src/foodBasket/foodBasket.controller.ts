import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FoodBasketService } from "./foodBasket.service";
import { FoodBasketControllerBase } from "./base/foodBasket.controller.base";

@swagger.ApiTags("foodBaskets")
@common.Controller("foodBaskets")
export class FoodBasketController extends FoodBasketControllerBase {
  constructor(
    protected readonly service: FoodBasketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
