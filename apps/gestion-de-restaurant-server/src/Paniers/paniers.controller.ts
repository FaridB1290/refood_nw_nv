import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { PaniersService } from "./paniers.service";

@swagger.ApiTags("paniers")
@common.Controller("paniers")
export class PaniersController {
  constructor(protected readonly service: PaniersService) {}
}
