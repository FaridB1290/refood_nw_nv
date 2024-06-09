import { Module } from "@nestjs/common";
import { PaniersService } from "./paniers.service";
import { PaniersController } from "./paniers.controller";
import { PaniersResolver } from "./paniers.resolver";

@Module({
  controllers: [PaniersController],
  providers: [PaniersService, PaniersResolver],
  exports: [PaniersService],
})
export class PaniersModule {}
