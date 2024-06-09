import { Module } from "@nestjs/common";
import { VentesService } from "./ventes.service";
import { VentesController } from "./ventes.controller";
import { VentesResolver } from "./ventes.resolver";

@Module({
  controllers: [VentesController],
  providers: [VentesService, VentesResolver],
  exports: [VentesService],
})
export class VentesModule {}
