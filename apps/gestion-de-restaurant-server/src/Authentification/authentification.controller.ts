import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthentificationService } from "./authentification.service";

@swagger.ApiTags("authentifications")
@common.Controller("authentifications")
export class AuthentificationController {
  constructor(protected readonly service: AuthentificationService) {}
}
