import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RestaurantEntityResolverBase } from "./base/restaurantEntity.resolver.base";
import { RestaurantEntity } from "./base/RestaurantEntity";
import { RestaurantEntityService } from "./restaurantEntity.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => RestaurantEntity)
export class RestaurantEntityResolver extends RestaurantEntityResolverBase {
  constructor(
    protected readonly service: RestaurantEntityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
