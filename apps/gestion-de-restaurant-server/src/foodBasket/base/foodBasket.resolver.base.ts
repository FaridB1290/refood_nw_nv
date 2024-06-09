/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { FoodBasket } from "./FoodBasket";
import { FoodBasketCountArgs } from "./FoodBasketCountArgs";
import { FoodBasketFindManyArgs } from "./FoodBasketFindManyArgs";
import { FoodBasketFindUniqueArgs } from "./FoodBasketFindUniqueArgs";
import { CreateFoodBasketArgs } from "./CreateFoodBasketArgs";
import { UpdateFoodBasketArgs } from "./UpdateFoodBasketArgs";
import { DeleteFoodBasketArgs } from "./DeleteFoodBasketArgs";
import { Restaurant } from "../../restaurant/base/Restaurant";
import { FoodBasketService } from "../foodBasket.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FoodBasket)
export class FoodBasketResolverBase {
  constructor(
    protected readonly service: FoodBasketService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FoodBasket",
    action: "read",
    possession: "any",
  })
  async _foodBasketsMeta(
    @graphql.Args() args: FoodBasketCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FoodBasket])
  @nestAccessControl.UseRoles({
    resource: "FoodBasket",
    action: "read",
    possession: "any",
  })
  async foodBaskets(
    @graphql.Args() args: FoodBasketFindManyArgs
  ): Promise<FoodBasket[]> {
    return this.service.foodBaskets(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FoodBasket, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FoodBasket",
    action: "read",
    possession: "own",
  })
  async foodBasket(
    @graphql.Args() args: FoodBasketFindUniqueArgs
  ): Promise<FoodBasket | null> {
    const result = await this.service.foodBasket(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FoodBasket)
  @nestAccessControl.UseRoles({
    resource: "FoodBasket",
    action: "create",
    possession: "any",
  })
  async createFoodBasket(
    @graphql.Args() args: CreateFoodBasketArgs
  ): Promise<FoodBasket> {
    return await this.service.createFoodBasket({
      ...args,
      data: {
        ...args.data,

        restaurant: args.data.restaurant
          ? {
              connect: args.data.restaurant,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => FoodBasket)
  @nestAccessControl.UseRoles({
    resource: "FoodBasket",
    action: "update",
    possession: "any",
  })
  async updateFoodBasket(
    @graphql.Args() args: UpdateFoodBasketArgs
  ): Promise<FoodBasket | null> {
    try {
      return await this.service.updateFoodBasket({
        ...args,
        data: {
          ...args.data,

          restaurant: args.data.restaurant
            ? {
                connect: args.data.restaurant,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FoodBasket)
  @nestAccessControl.UseRoles({
    resource: "FoodBasket",
    action: "delete",
    possession: "any",
  })
  async deleteFoodBasket(
    @graphql.Args() args: DeleteFoodBasketArgs
  ): Promise<FoodBasket | null> {
    try {
      return await this.service.deleteFoodBasket(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Restaurant, {
    nullable: true,
    name: "restaurant",
  })
  @nestAccessControl.UseRoles({
    resource: "Restaurant",
    action: "read",
    possession: "any",
  })
  async getRestaurant(
    @graphql.Parent() parent: FoodBasket
  ): Promise<Restaurant | null> {
    const result = await this.service.getRestaurant(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
