import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { RemboursementResolverBase } from "./base/remboursement.resolver.base";
import { Remboursement } from "./base/Remboursement";
import { RemboursementService } from "./remboursement.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Remboursement)
export class RemboursementResolver extends RemboursementResolverBase {
  constructor(
    protected readonly service: RemboursementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
