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
import { Sale } from "./Sale";
import { SaleCountArgs } from "./SaleCountArgs";
import { SaleFindManyArgs } from "./SaleFindManyArgs";
import { SaleFindUniqueArgs } from "./SaleFindUniqueArgs";
import { CreateSaleArgs } from "./CreateSaleArgs";
import { UpdateSaleArgs } from "./UpdateSaleArgs";
import { DeleteSaleArgs } from "./DeleteSaleArgs";
import { Panier } from "../../panier/base/Panier";
import { SaleService } from "../sale.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sale)
export class SaleResolverBase {
  constructor(
    protected readonly service: SaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "read",
    possession: "any",
  })
  async _salesMeta(
    @graphql.Args() args: SaleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sale])
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "read",
    possession: "any",
  })
  async sales(@graphql.Args() args: SaleFindManyArgs): Promise<Sale[]> {
    return this.service.sales(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sale, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "read",
    possession: "own",
  })
  async sale(@graphql.Args() args: SaleFindUniqueArgs): Promise<Sale | null> {
    const result = await this.service.sale(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sale)
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "create",
    possession: "any",
  })
  async createSale(@graphql.Args() args: CreateSaleArgs): Promise<Sale> {
    return await this.service.createSale({
      ...args,
      data: {
        ...args.data,

        panier: args.data.panier
          ? {
              connect: args.data.panier,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sale)
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "update",
    possession: "any",
  })
  async updateSale(@graphql.Args() args: UpdateSaleArgs): Promise<Sale | null> {
    try {
      return await this.service.updateSale({
        ...args,
        data: {
          ...args.data,

          panier: args.data.panier
            ? {
                connect: args.data.panier,
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

  @graphql.Mutation(() => Sale)
  @nestAccessControl.UseRoles({
    resource: "Sale",
    action: "delete",
    possession: "any",
  })
  async deleteSale(@graphql.Args() args: DeleteSaleArgs): Promise<Sale | null> {
    try {
      return await this.service.deleteSale(args);
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
  @graphql.ResolveField(() => Panier, {
    nullable: true,
    name: "panier",
  })
  @nestAccessControl.UseRoles({
    resource: "Panier",
    action: "read",
    possession: "any",
  })
  async getPanier(@graphql.Parent() parent: Sale): Promise<Panier | null> {
    const result = await this.service.getPanier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}