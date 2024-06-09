import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { UtilisateursService } from "./utilisateurs.service";

@swagger.ApiTags("utilisateurs")
@common.Controller("utilisateurs")
export class UtilisateursController {
  constructor(protected readonly service: UtilisateursService) {}
}
