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
import { AnnulationService } from "../annulation.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AnnulationCreateInput } from "./AnnulationCreateInput";
import { Annulation } from "./Annulation";
import { AnnulationFindManyArgs } from "./AnnulationFindManyArgs";
import { AnnulationWhereUniqueInput } from "./AnnulationWhereUniqueInput";
import { AnnulationUpdateInput } from "./AnnulationUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AnnulationControllerBase {
  constructor(
    protected readonly service: AnnulationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Annulation })
  @nestAccessControl.UseRoles({
    resource: "Annulation",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AnnulationCreateInput,
  })
  async createAnnulation(
    @common.Body() data: AnnulationCreateInput
  ): Promise<Annulation> {
    return await this.service.createAnnulation({
      data: {
        ...data,

        panier: data.panier
          ? {
              connect: data.panier,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        dateAnnulation: true,
        id: true,

        panier: {
          select: {
            id: true,
          },
        },

        raison: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Annulation] })
  @ApiNestedQuery(AnnulationFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Annulation",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async annulations(@common.Req() request: Request): Promise<Annulation[]> {
    const args = plainToClass(AnnulationFindManyArgs, request.query);
    return this.service.annulations({
      ...args,
      select: {
        createdAt: true,
        dateAnnulation: true,
        id: true,

        panier: {
          select: {
            id: true,
          },
        },

        raison: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Annulation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Annulation",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async annulation(
    @common.Param() params: AnnulationWhereUniqueInput
  ): Promise<Annulation | null> {
    const result = await this.service.annulation({
      where: params,
      select: {
        createdAt: true,
        dateAnnulation: true,
        id: true,

        panier: {
          select: {
            id: true,
          },
        },

        raison: true,
        updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Annulation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Annulation",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AnnulationUpdateInput,
  })
  async updateAnnulation(
    @common.Param() params: AnnulationWhereUniqueInput,
    @common.Body() data: AnnulationUpdateInput
  ): Promise<Annulation | null> {
    try {
      return await this.service.updateAnnulation({
        where: params,
        data: {
          ...data,

          panier: data.panier
            ? {
                connect: data.panier,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          dateAnnulation: true,
          id: true,

          panier: {
            select: {
              id: true,
            },
          },

          raison: true,
          updatedAt: true,
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
  @swagger.ApiOkResponse({ type: Annulation })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Annulation",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAnnulation(
    @common.Param() params: AnnulationWhereUniqueInput
  ): Promise<Annulation | null> {
    try {
      return await this.service.deleteAnnulation({
        where: params,
        select: {
          createdAt: true,
          dateAnnulation: true,
          id: true,

          panier: {
            select: {
              id: true,
            },
          },

          raison: true,
          updatedAt: true,
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