import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { RefundService } from "./refund.service";
import { RefundControllerBase } from "./base/refund.controller.base";

@swagger.ApiTags("refunds")
@common.Controller("refunds")
export class RefundController extends RefundControllerBase {
  constructor(
    protected readonly service: RefundService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
