import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AnnulationsService } from "./annulations.service";

@swagger.ApiTags("annulations")
@common.Controller("annulations")
export class AnnulationsController {
  constructor(protected readonly service: AnnulationsService) {}
}
