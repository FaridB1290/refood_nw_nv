import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RestaurantEntityServiceBase } from "./base/restaurantEntity.service.base";

@Injectable()
export class RestaurantEntityService extends RestaurantEntityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
