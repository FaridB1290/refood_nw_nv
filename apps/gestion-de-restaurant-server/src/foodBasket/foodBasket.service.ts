import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoodBasketServiceBase } from "./base/foodBasket.service.base";

@Injectable()
export class FoodBasketService extends FoodBasketServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
