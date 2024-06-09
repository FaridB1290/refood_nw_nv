import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { RestaurantEntityModuleBase } from "./base/restaurantEntity.module.base";
import { RestaurantEntityService } from "./restaurantEntity.service";
import { RestaurantEntityController } from "./restaurantEntity.controller";
import { RestaurantEntityResolver } from "./restaurantEntity.resolver";

@Module({
  imports: [RestaurantEntityModuleBase, forwardRef(() => AuthModule)],
  controllers: [RestaurantEntityController],
  providers: [RestaurantEntityService, RestaurantEntityResolver],
  exports: [RestaurantEntityService],
})
export class RestaurantEntityModule {}
