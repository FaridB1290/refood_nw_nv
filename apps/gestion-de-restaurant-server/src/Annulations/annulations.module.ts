import { Module } from "@nestjs/common";
import { AnnulationsService } from "./annulations.service";
import { AnnulationsController } from "./annulations.controller";
import { AnnulationsResolver } from "./annulations.resolver";

@Module({
  controllers: [AnnulationsController],
  providers: [AnnulationsService, AnnulationsResolver],
  exports: [AnnulationsService],
})
export class AnnulationsModule {}
