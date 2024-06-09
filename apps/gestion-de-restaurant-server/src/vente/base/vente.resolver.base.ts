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
import { Vente } from "./Vente";
import { VenteCountArgs } from "./VenteCountArgs";
import { VenteFindManyArgs } from "./VenteFindManyArgs";
import { VenteFindUniqueArgs } from "./VenteFindUniqueArgs";
import { CreateVenteArgs } from "./CreateVenteArgs";
import { UpdateVenteArgs } from "./UpdateVenteArgs";
import { DeleteVenteArgs } from "./DeleteVenteArgs";
import { RefundFindManyArgs } from "../../refund/base/RefundFindManyArgs";
import { Refund } from "../../refund/base/Refund";
import { RemboursementFindManyArgs } from "../../remboursement/base/RemboursementFindManyArgs";
import { Remboursement } from "../../remboursement/base/Remboursement";
import { Panier } from "../../panier/base/Panier";
import { VenteService } from "../vente.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Vente)
export class VenteResolverBase {
  constructor(
    protected readonly service: VenteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Vente",
    action: "read",
    possession: "any",
  })
  async _ventesMeta(
    @graphql.Args() args: VenteCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Vente])
  @nestAccessControl.UseRoles({
    resource: "Vente",
    action: "read",
    possession: "any",
  })
  async ventes(@graphql.Args() args: VenteFindManyArgs): Promise<Vente[]> {
    return this.service.ventes(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Vente, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Vente",
    action: "read",
    possession: "own",
  })
  async vente(
    @graphql.Args() args: VenteFindUniqueArgs
  ): Promise<Vente | null> {
    const result = await this.service.vente(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Vente)
  @nestAccessControl.UseRoles({
    resource: "Vente",
    action: "create",
    possession: "any",
  })
  async createVente(@graphql.Args() args: CreateVenteArgs): Promise<Vente> {
    return await this.service.createVente({
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
  @graphql.Mutation(() => Vente)
  @nestAccessControl.UseRoles({
    resource: "Vente",
    action: "update",
    possession: "any",
  })
  async updateVente(
    @graphql.Args() args: UpdateVenteArgs
  ): Promise<Vente | null> {
    try {
      return await this.service.updateVente({
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

  @graphql.Mutation(() => Vente)
  @nestAccessControl.UseRoles({
    resource: "Vente",
    action: "delete",
    possession: "any",
  })
  async deleteVente(
    @graphql.Args() args: DeleteVenteArgs
  ): Promise<Vente | null> {
    try {
      return await this.service.deleteVente(args);
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
  @graphql.ResolveField(() => [Refund], { name: "refunds" })
  @nestAccessControl.UseRoles({
    resource: "Refund",
    action: "read",
    possession: "any",
  })
  async findRefunds(
    @graphql.Parent() parent: Vente,
    @graphql.Args() args: RefundFindManyArgs
  ): Promise<Refund[]> {
    const results = await this.service.findRefunds(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Remboursement], { name: "remboursements" })
  @nestAccessControl.UseRoles({
    resource: "Remboursement",
    action: "read",
    possession: "any",
  })
  async findRemboursements(
    @graphql.Parent() parent: Vente,
    @graphql.Args() args: RemboursementFindManyArgs
  ): Promise<Remboursement[]> {
    const results = await this.service.findRemboursements(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
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
  async getPanier(@graphql.Parent() parent: Vente): Promise<Panier | null> {
    const result = await this.service.getPanier(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}