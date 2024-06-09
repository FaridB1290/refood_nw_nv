import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PanierService } from "./panier.service";
import { PanierControllerBase } from "./base/panier.controller.base";

@swagger.ApiTags("paniers")
@common.Controller("paniers")
export class PanierController extends PanierControllerBase {
  constructor(
    protected readonly service: PanierService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
