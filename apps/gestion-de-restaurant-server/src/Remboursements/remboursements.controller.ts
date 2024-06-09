import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { RemboursementsService } from "./remboursements.service";

@swagger.ApiTags("remboursements")
@common.Controller("remboursements")
export class RemboursementsController {
  constructor(protected readonly service: RemboursementsService) {}
}
