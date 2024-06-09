import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FoodBasketModuleBase } from "./base/foodBasket.module.base";
import { FoodBasketService } from "./foodBasket.service";
import { FoodBasketController } from "./foodBasket.controller";
import { FoodBasketResolver } from "./foodBasket.resolver";

@Module({
  imports: [FoodBasketModuleBase, forwardRef(() => AuthModule)],
  controllers: [FoodBasketController],
  providers: [FoodBasketService, FoodBasketResolver],
  exports: [FoodBasketService],
})
export class FoodBasketModule {}
