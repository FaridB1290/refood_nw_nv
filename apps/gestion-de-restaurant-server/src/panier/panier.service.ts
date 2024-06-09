import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PanierServiceBase } from "./base/panier.service.base";

@Injectable()
export class PanierService extends PanierServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
