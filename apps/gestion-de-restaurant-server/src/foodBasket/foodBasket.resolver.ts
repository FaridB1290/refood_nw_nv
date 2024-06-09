import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FoodBasketResolverBase } from "./base/foodBasket.resolver.base";
import { FoodBasket } from "./base/FoodBasket";
import { FoodBasketService } from "./foodBasket.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FoodBasket)
export class FoodBasketResolver extends FoodBasketResolverBase {
  constructor(
    protected readonly service: FoodBasketService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
