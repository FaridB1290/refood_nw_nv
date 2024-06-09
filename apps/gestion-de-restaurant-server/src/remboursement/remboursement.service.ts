import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RemboursementServiceBase } from "./base/remboursement.service.base";

@Injectable()
export class RemboursementService extends RemboursementServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
