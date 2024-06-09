import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AnnulationServiceBase } from "./base/annulation.service.base";

@Injectable()
export class AnnulationService extends AnnulationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
