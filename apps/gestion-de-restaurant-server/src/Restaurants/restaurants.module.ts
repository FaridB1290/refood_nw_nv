import { Module } from "@nestjs/common";
import { RestaurantsService } from "./restaurants.service";
import { RestaurantsController } from "./restaurants.controller";
import { RestaurantsResolver } from "./restaurants.resolver";

@Module({
  controllers: [RestaurantsController],
  providers: [RestaurantsService, RestaurantsResolver],
  exports: [RestaurantsService],
})
export class RestaurantsModule {}
