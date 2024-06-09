import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VenteServiceBase } from "./base/vente.service.base";

@Injectable()
export class VenteService extends VenteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
