/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { RestaurantEntityService } from "../restaurantEntity.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { RestaurantEntityCreateInput } from "./RestaurantEntityCreateInput";
import { RestaurantEntity } from "./RestaurantEntity";
import { RestaurantEntityFindManyArgs } from "./RestaurantEntityFindManyArgs";
import { RestaurantEntityWhereUniqueInput } from "./RestaurantEntityWhereUniqueInput";
import { RestaurantEntityUpdateInput } from "./RestaurantEntityUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class RestaurantEntityControllerBase {
  constructor(
    protected readonly service: RestaurantEntityService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: RestaurantEntity })
  @nestAccessControl.UseRoles({
    resource: "RestaurantEntity",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: RestaurantEntityCreateInput,
  })
  async createRestaurantEntity(
    @common.Body() data: RestaurantEntityCreateInput
  ): Promise<RestaurantEntity> {
    return await this.service.createRestaurantEntity({
      data: {
        ...data,

        utilisateur: data.utilisateur
          ? {
              connect: data.utilisateur,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,
        localisationLat: true,
        localisationLon: true,
        nom: true,
        numeroTelephone: true,
        typeCommerce: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [RestaurantEntity] })
  @ApiNestedQuery(RestaurantEntityFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "RestaurantEntity",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async restaurantEntities(
    @common.Req() request: Request
  ): Promise<RestaurantEntity[]> {
    const args = plainToClass(RestaurantEntityFindManyArgs, request.query);
    return this.service.restaurantEntities({
      ...args,
      select: {
        createdAt: true,
        id: true,
        localisationLat: true,
        localisationLon: true,
        nom: true,
        numeroTelephone: true,
        typeCommerce: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: RestaurantEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RestaurantEntity",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async restaurantEntity(
    @common.Param() params: RestaurantEntityWhereUniqueInput
  ): Promise<RestaurantEntity | null> {
    const result = await this.service.restaurantEntity({
      where: params,
      select: {
        createdAt: true,
        id: true,
        localisationLat: true,
        localisationLon: true,
        nom: true,
        numeroTelephone: true,
        typeCommerce: true,
        updatedAt: true,

        utilisateur: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: RestaurantEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RestaurantEntity",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: RestaurantEntityUpdateInput,
  })
  async updateRestaurantEntity(
    @common.Param() params: RestaurantEntityWhereUniqueInput,
    @common.Body() data: RestaurantEntityUpdateInput
  ): Promise<RestaurantEntity | null> {
    try {
      return await this.service.updateRestaurantEntity({
        where: params,
        data: {
          ...data,

          utilisateur: data.utilisateur
            ? {
                connect: data.utilisateur,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,
          localisationLat: true,
          localisationLon: true,
          nom: true,
          numeroTelephone: true,
          typeCommerce: true,
          updatedAt: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: RestaurantEntity })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "RestaurantEntity",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteRestaurantEntity(
    @common.Param() params: RestaurantEntityWhereUniqueInput
  ): Promise<RestaurantEntity | null> {
    try {
      return await this.service.deleteRestaurantEntity({
        where: params,
        select: {
          createdAt: true,
          id: true,
          localisationLat: true,
          localisationLon: true,
          nom: true,
          numeroTelephone: true,
          typeCommerce: true,
          updatedAt: true,

          utilisateur: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
