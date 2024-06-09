import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnnulationService } from "./annulation.service";
import { AnnulationControllerBase } from "./base/annulation.controller.base";

@swagger.ApiTags("annulations")
@common.Controller("annulations")
export class AnnulationController extends AnnulationControllerBase {
  constructor(
    protected readonly service: AnnulationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
