import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RemboursementService } from "./remboursement.service";
import { RemboursementControllerBase } from "./base/remboursement.controller.base";

@swagger.ApiTags("remboursements")
@common.Controller("remboursements")
export class RemboursementController extends RemboursementControllerBase {
  constructor(
    protected readonly service: RemboursementService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
