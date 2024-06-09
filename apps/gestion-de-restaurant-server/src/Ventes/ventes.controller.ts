import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { VentesService } from "./ventes.service";

@swagger.ApiTags("ventes")
@common.Controller("ventes")
export class VentesController {
  constructor(protected readonly service: VentesService) {}
}
