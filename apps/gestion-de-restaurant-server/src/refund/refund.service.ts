import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RefundServiceBase } from "./base/refund.service.base";

@Injectable()
export class RefundService extends RefundServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
